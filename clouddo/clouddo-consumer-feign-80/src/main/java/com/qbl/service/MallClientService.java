package com.qbl.service;

import com.github.pagehelper.PageInfo;
import com.qbl.pojo.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@FeignClient(value = "clouddo-provider-hystrix", fallbackFactory = MallClientServiceFallbackFactory.class)
public interface MallClientService {

    @RequestMapping("/account/get/{id}")
    Account get(@PathVariable("id") Integer id);

    @RequestMapping("/getScGameById/{game_id}")
    ScGame getScGameById(@PathVariable("game_id")int game_id);

    //根据id查询截图
    @RequestMapping("/getScScreenshotById/{game_id}")
    ScScreenshot getScScreenshotById(@PathVariable("game_id")int game_id);

    @RequestMapping("/sc/list")
    List<ScType> list();
    @RequestMapping("/mk/list/{id}/{index}")
    PageInfo<Market> mklist(@PathVariable("id") Integer id,@PathVariable("index") Integer index);
    @RequestMapping("/mk/{id}")
    public int update_mklist(@PathVariable("id") Integer id);
    //支付成功  生成订单
    @RequestMapping("/scPay/{order_no}/{pay_platform}/{pay_number}/{pay_prince}")
    public int insertScPay(@PathVariable("order_no")String order_no,@PathVariable("pay_platform")int pay_platform,@PathVariable("pay_number") String pay_number, @PathVariable("pay_prince")double pay_prince);
    @RequestMapping("/scPay")
    public int insert(@PathVariable String order_no,@PathVariable int pay_platform, @PathVariable String pay_number,@PathVariable double pay_prince);

}
