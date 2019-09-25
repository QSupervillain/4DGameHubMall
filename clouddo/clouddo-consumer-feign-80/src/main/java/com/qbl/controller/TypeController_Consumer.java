package com.qbl.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.qbl.pojo.Market;
import com.qbl.pojo.ScType;

import com.qbl.service.MallClientService;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

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
        //System.out.println(page);
        return page;
    }
    @RequestMapping("/list")
    @ResponseBody
    public PageInfo<Market> pagelist(String typeid, String index){
        PageHelper.startPage(Integer.parseInt(index),2,"game_id asc");
        List<Market> mklist = AccountClientService.mklist(Integer.parseInt(typeid));
        PageInfo<Market> page = new PageInfo<>();
        page.setList(mklist);
       // System.out.println(page);
        return page;
    }

    /**
     * solr搜索查詢数据
     * @param keyWord
     * @return
     */
    @RequestMapping("/solr_sosu")
    @ResponseBody
    public List<Market> search(String keyWord) throws Exception{
        System.out.println(keyWord+"*****************************************");
        ModelAndView model = new ModelAndView();
        //1 得到Solr服务器
        String solrUrl = "http://localhost:8081/solr/core_demo";
        //2 创建客户端链接
        HttpSolrClient solrClient = new HttpSolrClient.Builder(solrUrl).build();
        SolrQuery solrQuery=new SolrQuery();
        if(!StringUtils.isEmpty(keyWord)){
            solrQuery.set("q","game_title:"+keyWord);
            //hl 高亮设置
            solrQuery.setHighlight(true);
            solrQuery.addHighlightField("game_title");
            solrQuery.setHighlightSimplePre("<font color='red'>");
            solrQuery.setHighlightSimplePost("</font>");
        }else{
            solrQuery.set("q","*:*");
        }
       /* QueryResponse queryResponse=solrClient.query(solrQuery);

        List<Market> markets = queryResponse.getBeans(Market.class);*/

        //查询
        QueryResponse query = solrClient.query(solrQuery);
        Map<String, Map<String, List<String>>> highlighting = query.getHighlighting();
        //数据长度获取
        long numFound = query.getResults().getNumFound();
        System.out.println(numFound);
        List<Market> list = query.getBeans(Market.class);
        for (Market products : list) {
            Map<String, List<String>> stringListMap = highlighting.get(products.getGame_ids());
            List<String> strings = stringListMap.get("game_title");
            String result = strings.get(0);
            products.setGame_title(result);
            System.out.println(products.getGame_title());
        }
        return list;
    }

}