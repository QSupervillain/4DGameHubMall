package com.qbl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 2:42
 * @Description：
 */
@SpringBootApplication
@EnableHystrixDashboard
public class DashBoardApp_6001 {

    public static void main(String[] args) {
        SpringApplication.run(DashBoardApp_6001.class, args);
    }

}
