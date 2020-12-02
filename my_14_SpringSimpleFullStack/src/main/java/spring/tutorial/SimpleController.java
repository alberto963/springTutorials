package spring.tutorial;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @RestController
 * 
 *                 A convenience annotation that is itself annotated
 *                 with @Controller and @ResponseBody.
 * 
 *                 Types that carry this annotation are treated as controllers
 *                 where @RequestMapping methods assume @ResponseBody semantics
 *                 by default.
 * 
 *                 NOTE: @RestController is processed if an appropriate
 *                 HandlerMapping-HandlerAdapter pair is configured such as the
 *                 RequestMappingHandlerMapping-RequestMappingHandlerAdapterpair
 *                 which are the default in the MVC Java config and the MVC
 *                 namespace.
 *
 */
@RestController
@RequestMapping("/com/ex")

public class SimpleController {

	@Autowired
	private SimpleService simpleService;

	@RequestMapping("/get/{id}")
	public SimpleDTO getSimpleById(@PathVariable("id") long id) {
		return simpleService.getSimpleById(id);
	}

	@RequestMapping(value = "/simple", method = RequestMethod.POST)
	public void addSimple(@Valid @RequestBody SimpleDTO simpleDTO, HttpServletResponse response) {
		simpleService.addSimple(simpleDTO);
		response.setStatus(HttpStatus.CREATED.value());
	}

	/*
	 * // uncomment for additional dev-testing
	 * 
	 * @RequestMapping(value = "/movies", method = RequestMethod.GET) public
	 * List<Movie> getAllMovies() { return movieService.getAllMovies(); }
	 * 
	 * @RequestMapping(value = "/comments", method = RequestMethod.GET) public
	 * List<Comment> getAllComments() { return commentService.getAllComments(); }
	 */
}
