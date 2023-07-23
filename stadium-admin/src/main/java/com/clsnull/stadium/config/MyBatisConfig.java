package com.clsnull.stadium.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan({"com.clsnull.stadium.mapper", "com.clsnull.stadium.dao"})
public class MyBatisConfig {
}
