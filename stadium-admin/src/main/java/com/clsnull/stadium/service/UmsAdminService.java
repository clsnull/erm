package com.clsnull.stadium.service;

import com.clsnull.stadium.dto.UmsAdminParam;
import com.clsnull.stadium.model.UmsAdmin;
import com.clsnull.stadium.model.UmsResource;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface UmsAdminService {

    /**
     * 注册用户
     *
     * @return
     */
    UmsAdmin register(UmsAdminParam umsAdminParam);

    /**
     * 用户登录
     * @param username
     * @param password
     * @return
     */
    String login(String username, String password);

    /**
     * 获取用户信息
     * @param username
     * @return
     */
    UserDetails loadUserByUser(String username);

    /**
     * 通过用户名获取后台管理员
     * @param username
     * @return
     */
    UmsAdmin getAdminByUsername(String username);

    List<UmsResource> getResourceList(Long adminId);
}
