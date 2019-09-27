package com.qbl.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
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
    @RequestMapping("/mk/list/{id}/{index}")
    public PageInfo<Market> mklist(@PathVariable("id") Integer id,@PathVariable("index") Integer index){
        PageHelper.startPage(index,4);
        List<Market> list = mkService.mklist(id);
        PageInfo<Market> page = new PageInfo<>(list);
        System.out.println(page.getList());
        return  page;
    }
    @RequestMapping("/mk/{id}")
    public int update_mklist(@PathVariable("id") Integer id){
        int i = mkService.update_mklist(id);
        return i;
    }
}