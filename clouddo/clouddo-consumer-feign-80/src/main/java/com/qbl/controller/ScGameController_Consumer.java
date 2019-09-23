package com.qbl.controller;

import com.qbl.pojo.ScGame;
import com.qbl.pojo.ScScreenshot;
import com.qbl.service.MallClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Author ：HeepEnd-ZH
 * @Date ：2019/9/23 21:13
 * @Description：
 */
@Controller
public class ScGameController_Consumer {
    @Autowired
    private MallClientService mallClientService;

    @RequestMapping("/consumer/getScGameById/{game_id}")
    public String getScGameById(Model model,@PathVariable("game_id")int game_id){
        System.out.println("进入.................");
        ScGame scGame= mallClientService.getScGameById(game_id);
        /*System.out.println("qq:"+scGame.getGame_qq());
        System.out.println("上架时间:"+scGame.getGame_time());*/
        System.out.println("id:"+scGame.getGame_id());
        ScScreenshot scScreenshot= mallClientService.getScScreenshotById(scGame.getGame_id());
        model.addAttribute("scGame",scGame);
        model.addAttribute("scScreenshot",scScreenshot);
        return "game-detail";
    }


}
