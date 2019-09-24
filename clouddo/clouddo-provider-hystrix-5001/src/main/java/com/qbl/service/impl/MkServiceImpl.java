package com.qbl.service.impl;

import com.qbl.dao.MkDao;
import com.qbl.pojo.Market;
import com.qbl.service.MkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author ：WenBinZeng
 * @Date ：2019/9/23 17:01
 * @Description：
 */
@Service
public class MkServiceImpl implements MkService {
    @Autowired(required = false)
    private MkDao mkDao;

    @Override
    public List<Market> mklist(int id) {
        return mkDao.mklist(id);
    }
}