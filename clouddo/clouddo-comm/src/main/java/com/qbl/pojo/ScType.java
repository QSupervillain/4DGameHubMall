package com.qbl.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * @Author ：WenBinZeng
 * @Date ：2019/9/20 21:52
 * @Description：
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class ScType implements Serializable {
    private static final long serialVersionUID = -4532241936033527116L;
    private int type_id;
    private String type_name;
    private String type_image;
}