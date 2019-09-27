package com.ap.simple;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@ComponentScan
@RestController
@EnableAutoConfiguration
public class Example {

	@Autowired(required = true)
	private PojoService pojoService;

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	String homeGet() {
		return "Hello All World!";
	}

	@PostMapping("/home")
	@ResponseStatus(HttpStatus.CREATED)
	String homePost(@RequestBody String fname) {

		int id = pojoService.addFname(fname);

		return "Hello " + fname + " id=" + id;
	}

	public static void main(String[] args) {
		SpringApplication.run(Example.class, args);
	}
}