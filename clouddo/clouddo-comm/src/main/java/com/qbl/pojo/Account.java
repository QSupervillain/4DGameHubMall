package com.qbl.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * @Author ：大大怪将军
 * @Date ：2019/9/20 21:42
 * @Description： 游戏账号类
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Account implements Serializable {

    private static final long serialVersionUID = 5339440395570285605L;
    private Integer account_id;

    private String account_name;

    private String account_pwd;

}
