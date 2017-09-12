package com.my.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WelcomeController {

	@RequestMapping(value = "/helloMVC", method = RequestMethod.GET)
	public String sayHelloAgain(ModelMap model) {
		model.addAttribute("message", "Hello World, from Spring 4 MVC");
		return "welcome";
	}

}