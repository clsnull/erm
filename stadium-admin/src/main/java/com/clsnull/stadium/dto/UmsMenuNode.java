package com.clsnull.stadium.dto;

import com.clsnull.stadium.model.UmsMenu;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * 后台菜单节点封装
 */
@Getter
@Setter
public class UmsMenuNode extends UmsMenu {

    @ApiModelProperty(value = "子级菜单")
    private List<UmsMenuNode> children;
}
