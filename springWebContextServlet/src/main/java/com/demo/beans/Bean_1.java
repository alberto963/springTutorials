package com.demo.beans;

import org.springframework.beans.factory.annotation.Autowired;

public class Bean_1 {
	@Autowired
	private Service_0 service;

	public String api_0() {
		return "Bean_1 " +service.api_0();
	}
}
