package com.qbl;

import com.qbl.HystrixApp_5001;
import com.qbl.dao.MkDao;
import com.qbl.pojo.Market;
import com.qbl.pojo.ScType;
import com.qbl.service.MkService;
import com.qbl.service.TypeService;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * @Author ：WenBinZeng
 * @Date ：2019/9/5 20:36
 * @Description：
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = HystrixApp_5001.class)
public class Test {
    @Autowired(required = false)
    private TypeService typeService;
    @Autowired(required = false)
    private MkService mkService;

    @org.junit.Test
    public void aa(){
        List<ScType> typelist = typeService.typelist();
        System.out.println(typelist);
    }
    @org.junit.Test
    public void bb(){
        List<Market> mklist = mkService.mklist(0);
        System.out.println(mklist);
    }
}