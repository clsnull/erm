import {
    policy
} from '@/api/oss'
import { message, Upload } from 'antd';
import { useState } from 'react';

function SingleUpload() {
    let [dataobj, setDataobj] = useState({
        policy: '',
        signature: '',
        key: '',
        ossaccessKeyId: '',
        dir: '',
        host: ''
    })

    function beforeUpload(file) {
        policy().then(res => {
            setDataobj({
                policy: res.data.policy,
                signature: res.data.signature,
                key: res.data.key,
                ossaccessKeyId: res.data.ossaccessKeyId,
                dir: res.data.dir,
                host: res.data.host
            })
        })
    }

    function handleUploadSuccess(res, file) {
        let url = this.dataObj.host + '/' + this.dataObj.dir + '/' + file.name;
        this.fileList.push({ name: file.name, url: url });
        this.emitInput(this.fileList);
    }

    return (
        <h1>上传组件</h1>
    )
}

export default SingleUpload