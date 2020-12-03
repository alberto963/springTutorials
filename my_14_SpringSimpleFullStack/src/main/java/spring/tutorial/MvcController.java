package spring.tutorial;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.WebRequest;

/**
 * @Controller
 * 
 * Indicates that an annotated class is a "Controller" (e.g. a web controller).
 * 
 * This annotation serves as a specialization of @Component,allowing for
 * implementation classes to be autodetected through classpath scanning.It is
 * typically used in combination with annotated handler methods based on the
 * org.springframework.web.bind.annotation.RequestMapping annotation.
 */
@Controller
@RequestMapping("/com/ex")

public class MvcController {

	@RequestMapping("/")
	public String index(WebRequest request, Model model) {
		model.addAttribute("status", "Loaded index.html at " + new Date());
		model.addAttribute("code", "with success");
		return "index";
	}
	
	@RequestMapping("/react")
	public String react() {
		return "react";
	}
}
