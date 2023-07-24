package com.clsnull.stadium.dao;

import com.clsnull.stadium.model.UmsAdminRoleRelation;
import com.clsnull.stadium.model.UmsResource;
import com.clsnull.stadium.model.UmsRole;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 后台用户与角色关系管理自定义Dao
 */
public interface UmsAdminRoleRelationDao {

    /**
     * 获取用户所有可访问资源
     */
    List<UmsResource> getResourceList(@Param("adminId") Long adminId);

    /**
     * 获取所有的角色
     * @param adminId
     * @return
     */
    List<UmsRole> getRoleList(@Param("adminId") Long adminId);

    /**
     * 批量插入用户角色关系
     */
    void insertList(@Param("list") List<UmsAdminRoleRelation> list);
}
