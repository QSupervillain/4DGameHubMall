package com.qbl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 21:36
 * @Description：
 */
@SpringBootApplication          //启动Web
@EnableEurekaClient             //本服务启动后会自动注册进eureka服务中
@EnableCircuitBreaker           //对hystrix熔断机制的支持
public class HystrixApp_5001 {

    public static void main(String[] args) {
        SpringApplication.run(HystrixApp_5001.class, args);
    }

}
