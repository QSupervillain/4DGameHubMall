package com.qbl.service;

import com.github.pagehelper.PageInfo;
import com.qbl.pojo.*;
import feign.hystrix.FallbackFactory;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 22:31
 * @Description：
 */
@Component
public class MallClientServiceFallbackFactory implements FallbackFactory<MallClientService> {

    @Override
    public MallClientService create(Throwable throwable) {
        return new MallClientService() {
            @Override
            public Account get(Integer id) {
                return new Account().setAccount_id(id).setAccount_name("FallbackFactory@@@该ID:" + id + "没有对应的信息，检查前端获取的id是否存在，null--@hystrixCommand").setAccount_pwd("error");
            }

            @Override
            public ScGame getScGameById(int game_id) {
                return new ScGame().setGame_id(game_id).setGame_title("FallbackFactory@@@该ID:" + game_id + "没有对应的信息，检查前端获取的id是否存在，null--@hystrixCommand");
            }

            @Override
            public ScScreenshot getScScreenshotById(int game_id) {
                return new ScScreenshot().setGame_id(game_id).setScreenshot_src("FallbackFactory@@@该ID:" + game_id + "没有对应的信息，检查前端获取的id是否存在，null--@hystrixCommand");
            }

            @Override
            public List<ScType> list() {
                return null;
            }

            @Override
            public PageInfo<Market> mklist(Integer id, Integer index) {
                return null;
            }


        };
    }
}
