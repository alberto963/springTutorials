package com.websystique.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Import;

import com.websystique.springboot.configuration.JpaConfiguration;

@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = { "com.websystique.springboot" }) // same as @Configuration
																			// @EnableAutoConfiguration @ComponentScan
public class SpringBootCRUDApp {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(SpringBootCRUDApp.class, args);
		
		System.out.println("contex=" + context);
		System.out.println("CLASSPATH_ALL_URL_PREFIX=" + context.CLASSPATH_ALL_URL_PREFIX);
		System.out.println("CLASSPATH_URL_PREFIX=" + context.CLASSPATH_URL_PREFIX);
		System.out.println("environment=" + context.getEnvironment());
		System.out.println("applicationName=" + context.getApplicationName());
		System.out.println("displayName=" + context.getDisplayName());
		System.out.println("id=" + context.getId());
		
	}
}
