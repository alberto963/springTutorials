package spring.tutorial;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.WebRequest;

@Controller
public class LoadController {

	@RequestMapping("/load")
	public String load(WebRequest request, Model model) {
		model.addAttribute("status", "Changed default templates dir to dist");
		model.addAttribute("code", "with success");
		return "load";
	}

}
