package com.qbl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 21:19
 * @Description：
 */
@SpringBootApplication
@EnableEurekaServer
public class EurekaApp_4001 {

    public static void main(String[] args) {
        SpringApplication.run(EurekaApp_4001.class, args);
    }

}
