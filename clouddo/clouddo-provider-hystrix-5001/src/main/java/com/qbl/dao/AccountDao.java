package com.qbl.dao;

import com.qbl.pojo.Account;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountDao {

    /**
     *  根据 ID 找账号
     * @return
     */
    Account findById(Integer id);

}
