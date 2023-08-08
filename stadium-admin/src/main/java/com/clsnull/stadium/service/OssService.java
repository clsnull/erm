package com.clsnull.stadium.service;

import com.clsnull.stadium.dto.OssCallbackResult;
import com.clsnull.stadium.dto.OssPolicyResult;

import javax.servlet.http.HttpServletRequest;

/**
 * Oss对象存储管理Service
 */
public interface OssService {
    /**
     * Oss上传策略生成
     */
    OssPolicyResult policy();
    /**
     * Oss上传成功回调
     */
    OssCallbackResult callback(HttpServletRequest request);
}
