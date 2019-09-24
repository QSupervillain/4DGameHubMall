package com.qbl.service.impl;

import com.qbl.dao.MkDao;
import com.qbl.dao.TypeDao;
import com.qbl.pojo.ScType;
import com.qbl.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author ：WenBinZeng
 * @Date ：2019/9/23 17:01
 * @Description：
 */
@Service
public class TypeServiceImpl implements TypeService {
    @Autowired(required = false)
    private TypeDao typeDao;

    @Override
    public List<ScType> typelist() {
        return typeDao.typelist();
    }
}