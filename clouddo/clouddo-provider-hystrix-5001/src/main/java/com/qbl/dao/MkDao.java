package com.qbl.dao;

import com.qbl.pojo.Market;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MkDao {
    public List<Market>mklist(int id);

    /**
     * 根据游戏id修改状态
     * @return
     */
    public int update_mklist(int id);
}
