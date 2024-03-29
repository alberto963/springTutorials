package com.websystique.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

	@RequestMapping("/crud")
	String home(ModelMap modal) {
		modal.addAttribute("title", "CRUD Example");
		
		return "crud";
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
	
	@RequestMapping("/exe02")
	String exe02(ModelMap modal) {
		modal.addAttribute("title", "Example 02");
		
		return "exe02";
	}
	
	@RequestMapping("/index")
	String index(ModelMap modal) {
		modal.addAttribute("title", "React app Example");
		
		return "index";
	}

	@RequestMapping("/partials/{page}")
	String partialHandler(@PathVariable("page") final String page) {
		
		return page;
	}

}
