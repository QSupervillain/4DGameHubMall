package com.qbl.dao;

import com.qbl.pojo.ScType;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TypeDao {
    List<ScType>typelist();
}
