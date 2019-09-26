package com.ap.simple;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@EnableAutoConfiguration
public class Example {

	@RequestMapping(value="/home", method=RequestMethod.GET)
	String homeG() {
		return "Hello All World!";
	}

	@PostMapping("/home")
    @ResponseStatus(HttpStatus.CREATED)	
	String homeP(@RequestBody String person) {
		return "Hello " + person;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(Example.class, args);
	}
}