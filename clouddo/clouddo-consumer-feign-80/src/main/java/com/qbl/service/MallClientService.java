package com.qbl.service;

import com.qbl.pojo.Account;
import com.qbl.pojo.ScGame;
import com.qbl.pojo.ScScreenshot;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(value = "clouddo-provider-hystrix", fallbackFactory = MallClientServiceFallbackFactory.class)
public interface MallClientService {

    @RequestMapping("/account/get/{id}")
    Account get(@PathVariable("id") Integer id);

    @RequestMapping("/getScGameById/{game_id}")
    ScGame getScGameById(@PathVariable("game_id")int game_id);

    //根据id查询截图
    @RequestMapping("/getScScreenshotById/{game_id}")
    ScScreenshot getScScreenshotById(@PathVariable("game_id")int game_id);

}
