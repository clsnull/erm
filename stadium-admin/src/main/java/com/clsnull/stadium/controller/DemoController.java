package com.clsnull.stadium.controller;

import com.clsnull.stadium.model.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
@Api(tags = "DemoController")
@Tag(name = "DemoController", description = "测试接口")
public class DemoController {

    @GetMapping("/test1")
    @ApiOperation(value = "测试接口1")
    public User hello1(@RequestBody User user) {
        return new User();
    }

    @GetMapping("/test2")
    @ApiOperation(value = "测试接口2")
    public String hello2() {
        return "hello world";
    }
}
