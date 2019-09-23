package com.qbl.dao;

import com.qbl.pojo.ScGame;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.PathVariable;

@Mapper
public interface ScGameDao {
    //根据id查询对应商品详情
    ScGame getScGameById(@PathVariable("game_id")int game_id);
}
