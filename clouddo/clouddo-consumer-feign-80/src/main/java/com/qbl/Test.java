package com.qbl;
import com.qbl.service.MallClientService;
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
@SpringBootTest(classes = FeignApp_80.class)
public class Test {
    @Autowired(required = false)
    private MallClientService mallClientService;

    @org.junit.Test
    public void aa(){
        int i = mallClientService.update_mklist(6);
        System.out.println("*******************"+i);
    }

}