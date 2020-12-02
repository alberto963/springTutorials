package spring.tutorial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;

@Controller
@RequestMapping("/com/ex")

public class SimpleController {
	@Autowired
	private SimpleService simpleService;

	@RequestMapping("/load")
	public String load(WebRequest request, Model model) {
		model.addAttribute("status", "Changed default templates dir to dist");
		model.addAttribute("code", "with success");
		return "load";
	}

    @RequestMapping(value = "/simple/{id}", method = RequestMethod.GET)
    public SimpleDTO getMovieById(@PathVariable("id") long id) {
        return simpleService.getSimpleById(id);
    }

/*    // uncomment for additional dev-testing
    @RequestMapping(value = "/movies", method = RequestMethod.GET)
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @RequestMapping(value = "/comments", method = RequestMethod.GET)
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }*/
}
