package com.qbl.service;

import com.qbl.pojo.ScScreenshot;
import org.springframework.web.bind.annotation.PathVariable;

public interface ScScreenshotService {
    //根据id查询截图
    ScScreenshot getScScreenshotById(int game_id);
}
