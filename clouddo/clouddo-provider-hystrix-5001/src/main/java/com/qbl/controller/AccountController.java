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
    public Account get(@PathVariable("id") Integer id) {

        Account account = accountService.get(id);

        if (account == null) {
            throw new RuntimeException("该ID：" + id + "不存在");
        }
        return account;
    }

}
