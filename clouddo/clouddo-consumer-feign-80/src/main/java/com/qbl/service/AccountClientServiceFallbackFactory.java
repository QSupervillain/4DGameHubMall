package com.qbl.service;

import com.qbl.pojo.Account;
import feign.hystrix.FallbackFactory;
import org.springframework.stereotype.Component;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 22:31
 * @Description：
 */
@Component
public class AccountClientServiceFallbackFactory implements FallbackFactory<AccountClientService> {

    @Override
    public AccountClientService create(Throwable throwable) {
        return new AccountClientService() {
            @Override
            public Account get(Integer id) {
                return new Account().setAccount_id(id).setAccount_name("FallbackFactory@@@该ID:" + id + "没有对应的信息，检查前端获取的id是否存在，null--@hystrixCommand").setAccount_pwd("error");
            }
        };
    }
}
