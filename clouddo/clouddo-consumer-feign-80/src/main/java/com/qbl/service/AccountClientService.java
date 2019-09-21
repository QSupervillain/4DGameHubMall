package com.qbl.service;

import com.qbl.pojo.Account;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(value = "clouddo-provider-hystrix", fallbackFactory = AccountClientServiceFallbackFactory.class)
public interface AccountClientService {

    @RequestMapping("/account/get/{id}")
    Account get(@PathVariable("id") Integer id);

}
