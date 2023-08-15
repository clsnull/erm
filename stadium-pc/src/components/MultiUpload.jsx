/* eslint-disable react/prop-types */
import {
    policy
} from '@/api/oss'
import { message, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

function MultiUpload({ value, onChange, maxCount = 5 }) {
    const [OSSData, setOSSData] = useState()
    const [fileList, setFileList] = useState([])

    async function beforeUpload(file) {
        if (!OSSData) return false;
        const expire = Number(OSSData.expire) * 1000
        if (expire < Date.now()) {
            await init();
        }
        const suffix = file.name.slice(file.name.lastIndexOf('.'));
        const filename = Date.now() + suffix;
        file.key = OSSData.dir + filename;
        file.url = OSSData.host + '/' + OSSData.dir + filename;
        return file;
    }

    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList)
        onChange?.([...newFileList]);
    }

    const onRemove = (file) => {
        const newFileList = (value || []).filter((v) => v.url !== file.url);
        setFileList(newFileList)
        if (onChange) {
            onChange(newFileList);
        }
    };

    function getExtraData(file) {
        return {
            key: file.key,
            OSSAccessKeyId: OSSData?.accessKeyId,
            policy: OSSData?.policy,
            Signature: OSSData?.signature,
        }
    }

    async function init() {
        try {
            const result = await policy();
            setOSSData(result.data);
        } catch (error) {
            message.error(error);
        }
    }
    useEffect(() => {
        init();
    }, [])
    useEffect(() => {
        if (!value) return
        setFileList([...value])
    }, [value])
    const uploadProps = {
        name: 'file',
        action: OSSData?.host,
        listType: 'picture-card',
        onChange: handleChange,
        onRemove,
        data: getExtraData,
        beforeUpload
    }
    const uploadButton = (
        <div>
            <PlusOutlined size={32} />
        </div>
    );
    return (
        <>
            <Upload {...uploadProps} fileList={fileList} maxCount={maxCount}>
                {fileList.length >= maxCount ? null : uploadButton}
            </Upload>
        </>
    )
}

export default MultiUpload