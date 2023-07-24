package com.clsnull.stadium.service.impl;

import com.clsnull.stadium.dto.UmsMenuNode;
import com.clsnull.stadium.model.UmsMenu;
import com.clsnull.stadium.service.UmsMenuService;

import java.util.List;

public class UmsMenuServiceImpl implements UmsMenuService {
    @Override
    public int create(UmsMenu umsMenu) {
        return 0;
    }

    @Override
    public int update(Long id, UmsMenu umsMenu) {
        return 0;
    }

    @Override
    public UmsMenu getItem(Long id) {
        return null;
    }

    @Override
    public int delete(Long id) {
        return 0;
    }

    @Override
    public List<UmsMenu> list(Long parentId, Integer pageSize, Integer pageNum) {
        return null;
    }

    @Override
    public List<UmsMenuNode> treeList() {
        return null;
    }

    @Override
    public int updateHidden(Long id, Integer hidden) {
        return 0;
    }
}
