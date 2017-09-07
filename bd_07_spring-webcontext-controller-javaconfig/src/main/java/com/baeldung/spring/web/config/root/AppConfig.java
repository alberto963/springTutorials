package com.baeldung.spring.web.config.root;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.baeldung.spring.web.config.LogAccessService;
import com.baeldung.spring.web.config.LogConfiguration;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.baeldung.spring.web.controller")
public class AppConfig {

	@Bean
	public LogConfiguration logConfiguration() {
		LogConfiguration configuration = new LogConfiguration();
		return configuration;
	}
	
	@Bean
	public LogAccessService logAccessService() {
		LogAccessService service = new LogAccessService();
		service.setService("console");
		return service;
	}
}
