package com.websystique.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

	@RequestMapping("/")
	String home(ModelMap modal) {
		modal.addAttribute("title", "CRUD Example");
		
		return "index";
	}

	@RequestMapping("/shop")
	String shop(ModelMap modal) {
		modal.addAttribute("title", "Alberto Example");
		
		return "shop";
	}

	@RequestMapping("/exe01")
	String exe01(ModelMap modal) {
		modal.addAttribute("title", "Example 01");
		
		return "exe01";
	}
	
	@RequestMapping("/partials/{page}")
	String partialHandler(@PathVariable("page") final String page) {
		
		return page;
	}

}
