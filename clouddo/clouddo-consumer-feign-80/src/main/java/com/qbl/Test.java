package com.qbl;
import com.qbl.service.MallClientService;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.SimpleDateFormat;
import java.util.Date;
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
    @org.junit.Test
    public void dd(){
        //Date date=new Date();
        //SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd :hh:mm:ss");
        //System.out.println(dateFormat.format(date));
        int insert = mallClientService.insert("1", 2, "222", 200);
        System.out.println(insert);
    }

}