package com.qbl.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * @Author ：HeepEnd-ZH
 * @Date ：2019/9/24 2:34
 * @Description：
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class ScScreenshot {
    private  int screenshot_id;             //截图id
    private  int   game_id;                 //所属商品详情id
    private  String   screenshot_src;       //图片路径
}
