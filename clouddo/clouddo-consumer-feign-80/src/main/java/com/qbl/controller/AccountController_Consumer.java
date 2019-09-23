package com.qbl.controller;

import com.qbl.pojo.Account;
import com.qbl.service.MallClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 22:36
 * @Description：
 */
@RestController
public class AccountController_Consumer {

    @Autowired
    private MallClientService service;

    @RequestMapping("/consumer/account/get/{id}")
    public Account get(@PathVariable("id") Integer id) {
        return service.get(id);
    }

}
