import {
    policy
} from '@/api/oss'
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

function SingleUpload({ value, onChange }) {
    let [OSSData, setOSSData] = useState()

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

    const handleChange = ({ fileList }) => {
        console.log('Aliyun OSS:', fileList);
        onChange?.([...fileList]);
    }

    const onRemove = (file) => {
        const files = (value || []).filter((v) => v.url !== file.url);
        if (onChange) {
            onChange(files);
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
    const uploadProps = {
        name: 'file',
        action: OSSData?.host,
        onChange: handleChange,
        onRemove,
        data: getExtraData,
        beforeUpload
    }
    return (
        <>
            <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}></Button>
            </Upload>
        </>
    )
}

export default SingleUpload