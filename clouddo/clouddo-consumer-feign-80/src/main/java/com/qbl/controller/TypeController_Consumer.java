package com.qbl.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.qbl.pojo.Market;
import com.qbl.pojo.ScType;

import com.qbl.service.MallClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author ：WenBinZeng
 * @Date ：2019/9/23 20:56
 * @Description：
 */
@Controller
public class TypeController_Consumer {
    @Autowired
    private MallClientService AccountClientService;
    @RequestMapping("/consumer/sc/list")
    @ResponseBody
    public List<ScType> typelist(){
        return AccountClientService.list();
    }
    @RequestMapping("/index")
    public String index(){
        return "index";
    }
    @RequestMapping("/consumer/mk/list2")
    @ResponseBody
    public PageInfo<Market> pageli2st(String typeid, String index){
        int i = Integer.parseInt(index);
        PageHelper.startPage(i,2);
        List<Market> mklist = AccountClientService.mklist(Integer.parseInt(typeid));
        PageInfo<Market> page = new PageInfo<>(mklist);
        page.setPageSize(2);
        System.out.println(page);
        return page;
    }
    @RequestMapping("/list")
    @ResponseBody
    public PageInfo<Market> pagelist(String typeid, String index){
        PageHelper.startPage(Integer.parseInt(index),2,"game_id asc");
        List<Market> mklist = AccountClientService.mklist(Integer.parseInt(typeid));
        PageInfo<Market> page = new PageInfo<>();
        page.setList(mklist);
        System.out.println(page);
        return page;
    }
}