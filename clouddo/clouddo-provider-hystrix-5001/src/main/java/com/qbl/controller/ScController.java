package com.qbl.controller;

import com.qbl.dao.MkDao;
import com.qbl.dao.TypeDao;
import com.qbl.pojo.Market;
import com.qbl.pojo.ScType;
import com.qbl.service.MkService;
import com.qbl.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author ：WenBinZeng
 * @Date ：2019/9/23 20:15
 * @Description：
 */
@RestController
public class ScController {

    @Autowired(required = false)
    private TypeService typeService;
    @Autowired(required = false)
    private MkService mkService;
    @RequestMapping("/sc/list")
    public List<ScType>list(){
        return typeService.typelist();
    }
    @RequestMapping("/mk/list/{id}")
    public List<Market>mklist(@PathVariable("id") Integer id){
        return mkService.mklist(id);
    }
}