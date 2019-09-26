package com.qbl.service;

import com.qbl.pojo.Market;

import java.util.List;

public interface MkService {
    public List<Market> mklist(int id);
    /**
     * 根据游戏id修改状态
     * @return
     */
    public int update_mklist(int id);
}
