package com.qbl.service.impl;
 import com.qbl.service.scPayService;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Service;
 import com.qbl.dao.scPayDao;
 import org.springframework.transaction.annotation.Transactional;

 import java.util.Date;
@Service
@Transactional
public class scPayServiceImpl implements scPayService {
    @Autowired(required = false)
    private scPayDao scPayDao;
    @Override
    public int insertScPay(String order_no, int pay_platform, String pay_number, double pay_prince) {
        return scPayDao.insertScPay(order_no,pay_platform,pay_number,pay_prince);
    }
}
