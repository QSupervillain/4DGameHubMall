package com.qbl.controller;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.qbl.pojo.Account;
import com.qbl.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 21:55
 * @Description：
 */
@RestController
public class AccountController {

    @Autowired
    private AccountService accountService;

    @RequestMapping("/account/get/{id}")
    //-旦调用服务方法失败并抛出了错误信息后，会自动调用@HystrixCommand标注好的fallbackMethod调用类中的指定方法
    @HystrixCommand(fallbackMethod = "accountHystrix_Get")
    public Account get(@PathVariable("id") Integer id) {

        Account account = accountService.get(id);

        if (account == null) {
            throw new RuntimeException("该ID：" + id + "不存在");
        }

        return account;
    }

    public Account accountHystrix_Get(@PathVariable("id") Integer id) {
        return new Account().setAccount_id(id).setAccount_name("该ID:" + id + "没有对应的信息，检查前端获取的id是否存在，null--@hystrixCommand").setAccount_pwd("error");
    }

}
