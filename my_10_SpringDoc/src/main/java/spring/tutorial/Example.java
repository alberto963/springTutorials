package spring.tutorial;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spring.tutorial.services.DatabaseAccountService;

// @SpringBootApplication is the same as @Configuration @EnableAutoConfiguration @ComponentScan.
// Not used here as not needed
@RestController
// @EnableAutoConfiguration
@SpringBootApplication
public class Example {
	
	@Autowired
	DatabaseAccountService das;

	@RequestMapping("/")
	String home() {
		return "Hello World!? Account open " + das.open() + " at " + new Date();
	}

	public static void main(String[] args) {
		SpringApplication.run(Example.class, args);
	}
}