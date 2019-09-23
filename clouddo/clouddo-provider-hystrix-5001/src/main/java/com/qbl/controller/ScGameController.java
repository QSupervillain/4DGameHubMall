package com.qbl.controller;

import com.qbl.pojo.Account;
import com.qbl.pojo.ScGame;
import com.qbl.service.ScGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author ：HeepEnd-ZH
 * @Date ：2019/9/23 21:51
 * @Description：
 */
@RestController
public class ScGameController {
    @Autowired
    private ScGameService scGameService;

    //根据id查询对应商品详情
    @RequestMapping("/getScGameById/{game_id}")
    public ScGame getScGameById(@PathVariable("game_id")int game_id){
        ScGame scGame=scGameService.getScGameById(game_id);
        if (scGame == null) {
            throw new RuntimeException("该ID：" + game_id + "不存在");
        }
        return scGame;
    }
}
