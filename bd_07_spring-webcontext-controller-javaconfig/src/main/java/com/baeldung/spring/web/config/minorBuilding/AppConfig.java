package com.baeldung.spring.web.config.minorBuilding;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.baeldung.spring.web.controller")
public class AppConfig {
}
