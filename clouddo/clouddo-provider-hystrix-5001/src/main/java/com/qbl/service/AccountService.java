package com.qbl.service;

import com.qbl.pojo.Account;

public interface AccountService {

    /**
     *  根据 ID 找账号
     * @return
     */
    Account get(Integer id);

}
