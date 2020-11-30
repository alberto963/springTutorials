package spring.tutorial;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoadController {

	@RequestMapping("/load")
	public String load(Model model) {
		model.addAttribute("status", "Changed default templates dir to dist");
		model.addAttribute("code", "with success");
		return "load";
	}

}
