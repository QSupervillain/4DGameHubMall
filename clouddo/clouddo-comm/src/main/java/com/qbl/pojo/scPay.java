package com.qbl.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class scPay implements Serializable {
    private int pay_id;         //订单id
    private String order_no;       // 底单号
    private int pay_platform;   //支付方式
    private String pay_number;      //支付宝支付的流水号
    private Date pay_createtime;        //支付时间
    private double pay_prince;      //支付金额
    /*order_no
    pay_platform
    pay_number
    pay_createtime
    pay_prince*/


}
