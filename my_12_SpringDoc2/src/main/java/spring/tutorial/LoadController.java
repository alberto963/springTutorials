package spring.tutorial;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.WebRequest;

@Controller
@RequestMapping("/com/ex")

public class LoadController {

	@RequestMapping("/load")
	public String load(WebRequest request, Model model) {
		model.addAttribute("status", "Changed default templates dir to dist");
		model.addAttribute("code", "with success");
		return "load";
	}

	@RequestMapping("/")
	public String home() {
		return "Hello World!! at " + new Date();
	}

}
