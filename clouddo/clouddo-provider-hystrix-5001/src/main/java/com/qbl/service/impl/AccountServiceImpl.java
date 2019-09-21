package com.qbl.service.impl;

import com.qbl.dao.AccountDao;
import com.qbl.pojo.Account;
import com.qbl.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 22:07
 * @Description：
 */
@Service
@Transactional
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountDao accountDao;

    @Override
    public Account get(Integer id) {
        return accountDao.findById(id);
    }
}
