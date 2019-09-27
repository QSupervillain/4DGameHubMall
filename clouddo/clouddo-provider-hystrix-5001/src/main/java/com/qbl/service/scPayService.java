package com.qbl.service;

import java.util.Date;

public interface scPayService {
    //新增订单
    public int insertScPay(String order_no,int pay_platform, String pay_number, double pay_prince);
}
