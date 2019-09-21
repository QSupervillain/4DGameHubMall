package com.qbl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 22:20
 * @Description：
 */
@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients(basePackages = "com.qbl")
public class FeignApp_80 {

    public static void main(String[] args) {
        SpringApplication.run(FeignApp_80.class, args);
    }

}
