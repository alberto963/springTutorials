package com.demo.beans;

import org.springframework.beans.factory.annotation.Autowired;

public class Bean_0 {
	@Autowired
	private Service_0 service;

	public String api_0() {
		return "Bean_0 " + service.api_0();
	}
}
