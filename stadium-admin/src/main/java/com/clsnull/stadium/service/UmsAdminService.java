package com.clsnull.stadium.service;

import com.clsnull.stadium.dto.UmsAdminParam;
import com.clsnull.stadium.dto.UpdateAdminPasswordParam;
import com.clsnull.stadium.model.UmsAdmin;
import com.clsnull.stadium.model.UmsResource;
import com.clsnull.stadium.model.UmsRole;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;

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

    /**
     * 获取指定用户的可访问资源
     */
    List<UmsResource> getResourceList(Long adminId);


    /**
     * 刷新token的功能
     * @param oldToken 旧的token
     */
    String refreshToken(String oldToken);

    /**
     * 根据用户id获取用户
     */
    UmsAdmin getItem(Long id);


    /**
     * 根据用户名或昵称分页查询用户
     */
    List<UmsAdmin> list(String keyword, Integer pageSize, Integer pageNum);


    /**
     * 修改指定用户信息
     */
    int update(Long id, UmsAdmin admin);

    /**
     * 删除指定用户
     */
    int delete(Long id);


    /**
     * 修改用户角色关系
     */
    @Transactional
    int updateRole(Long adminId, List<Long> roleIds);


    /**
     * 获取用户对应角色
     */
    List<UmsRole> getRoleList(Long adminId);

    /**
     * 修改密码
     */
    int updatePassword(UpdateAdminPasswordParam updatePasswordParam);

}
