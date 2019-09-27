package com.qbl.dao;

import org.apache.ibatis.annotations.Mapper;

import java.sql.Date;

@Mapper
public interface scPayDao {
    //新增订单
    public int insertScPay(String order_no, int pay_platform, String pay_number,double pay_prince);
}
