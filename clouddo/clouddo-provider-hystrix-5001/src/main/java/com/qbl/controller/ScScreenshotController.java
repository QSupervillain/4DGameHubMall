package com.qbl.controller;

import com.qbl.pojo.ScGame;
import com.qbl.pojo.ScScreenshot;
import com.qbl.service.ScScreenshotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author ：HeepEnd-ZH
 * @Date ：2019/9/24 2:44
 * @Description：
 */
@RestController
public class ScScreenshotController {
    @Autowired
    ScScreenshotService scScreenshotService;


    //根据id查询截图
    @RequestMapping("/getScScreenshotById/{game_id}")
    public ScScreenshot getScScreenshotById(@PathVariable("game_id") int game_id) {
        ScScreenshot scScreenshot=scScreenshotService.getScScreenshotById(game_id);
        if (scScreenshot == null) {
            throw new RuntimeException("该ID：" + game_id + "不存在");
        }
        return scScreenshot;
    }
}
