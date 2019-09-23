package com.qbl.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @Author ：HeepEnd-ZH
 * @Date ：2019/9/23 15:34
 * @Description：商品详情类
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class ScGame {
    private int game_id;                    //主键
    private int type_id;                    //类型ID
    private int account_id;                 //账号ID
    private String game_title;              //游戏标题
    private String game_describe;           //游戏描述
    private String game_qq;                 //联系方式
    private String game_image;              //图片
    private BigDecimal game_money;          //价格 Java对应类型java.math.BigDecimal
    private Date game_time;                 //创建时间
    private int game_status;                //状态-1表示已卖出0等待卖出
    private String game_region;             //大区服务器
}
