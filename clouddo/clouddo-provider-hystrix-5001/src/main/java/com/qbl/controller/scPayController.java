package com.qbl.controller;
import com.qbl.service.scPayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class scPayController {
    @Autowired
    private scPayService scPayService;
    @RequestMapping("/scPay/{order_no}/{pay_platform}/{pay_number}/{pay_prince}")
    public int insertScPay(@PathVariable("order_no")String order_no, @PathVariable("pay_platform")int pay_platform, @PathVariable("pay_number") String pay_number, @PathVariable("pay_prince")double pay_prince){
       return scPayService.insertScPay(order_no,pay_platform,pay_number,pay_prince);
    }
    @RequestMapping("/scPay")
    public int insert(@PathVariable String order_no,@PathVariable int pay_platform,@PathVariable  String pay_number,@PathVariable double pay_prince){
        return scPayService.insertScPay(order_no,pay_platform,pay_number,pay_prince);
    }
}
