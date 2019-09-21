package com.qbl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 19:25
 * @Description：
 */
@SpringBootApplication
@EnableZuulProxy
public class ZuulApp_6002 {

    public static void main(String[] args) {
        SpringApplication.run(ZuulApp_6002.class, args);
    }

}
