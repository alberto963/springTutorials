package com.demo.beans;

import org.springframework.beans.factory.annotation.Autowired;

import com.demo.services.Service_0;

public class Bean_0 {
    @Autowired
    private Service_0 service;

    public String api_0() {
        return "Bean_0 " + service.api_0();
    }
}
