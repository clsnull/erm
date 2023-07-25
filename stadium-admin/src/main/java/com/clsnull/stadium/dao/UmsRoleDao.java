package com.clsnull.stadium.dao;

import com.clsnull.stadium.model.UmsMenu;
import com.clsnull.stadium.model.UmsResource;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 后台角色管理自定义Dao
 */
public interface UmsRoleDao {
    /**
     * 根据后台用户ID获取菜单
     */
    List<UmsMenu> getMenuList(@Param("adminId") Long adminId);

    /**
     * 根据角色ID获取菜单
     */
    List<UmsMenu> getMenuListByRoleId(@Param("roleId") Long roleId);

    /**
     * 根据角色ID获取菜单
     */
    List<UmsResource> getResourceListByRoleId(@Param("roleId") Long roleId);
}
