package com.qbl.dao;

import com.qbl.pojo.ScScreenshot;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.PathVariable;

@Mapper
public interface ScScreenshotDao {
    //根据id查询截图
    ScScreenshot getScScreenshotById(@PathVariable("game_id")int game_id);
}
