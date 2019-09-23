package com.qbl.service.impl;

import com.qbl.dao.ScScreenshotDao;
import com.qbl.pojo.ScScreenshot;
import com.qbl.service.ScScreenshotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @Author ：HeepEnd-ZH
 * @Date ：2019/9/24 2:42
 * @Description：
 */
@Service
@Transactional
public class ScScreenshotServiceImpl implements ScScreenshotService {
    @Autowired(required = false)
    ScScreenshotDao scScreenshotDao;
    @Override
    public ScScreenshot getScScreenshotById(int game_id) {
        return scScreenshotDao.getScScreenshotById(game_id);
    }
}
