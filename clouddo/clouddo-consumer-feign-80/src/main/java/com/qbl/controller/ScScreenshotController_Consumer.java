package com.qbl.controller;

import com.qbl.pojo.ScScreenshot;
import com.qbl.service.MallClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author ：HeepEnd-ZH
 * @Date ：2019/9/24 2:50
 * @Description：
 */
@Controller
public class ScScreenshotController_Consumer {
    @Autowired
    private MallClientService mallClientService;


    //根据id查询截图
    @RequestMapping("/consumer/getScScreenshotById/{game_id}")
    public ScScreenshot getScScreenshotById(@PathVariable("game_id") int game_id) {

        return mallClientService.getScScreenshotById(game_id);
    }

}
