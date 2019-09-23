package com.qbl.service.impl;

import com.qbl.dao.AccountDao;
import com.qbl.dao.ScGameDao;
import com.qbl.pojo.ScGame;
import com.qbl.service.ScGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @Author ：HeepEnd-ZH
 * @Date ：2019/9/23 20:55
 * @Description：
 */
@Service
@Transactional
public class ScGameServiceImpl implements ScGameService {

    @Autowired(required =false)
    private ScGameDao scGameDao;

    @Override
    public ScGame getScGameById(int game_id) {
        return scGameDao.getScGameById(game_id);
    }
}
