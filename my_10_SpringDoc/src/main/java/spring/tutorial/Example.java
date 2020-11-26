package spring.tutorial;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.boot.ExitCodeGenerator;
//import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import spring.tutorial.services.DatabaseAccountService;

// @SpringBootApplication is the same as @Configuration @EnableAutoConfiguration @ComponentScan.
// Not used here as not needed
@RestController
// @EnableAutoConfiguration
@SpringBootApplication
public class Example {

	@Autowired
	private DatabaseAccountService das;

	private static ConfigurableApplicationContext myApp;

	@RequestMapping("/")
	public String home() {
		return "Hello World!! Account open " + das.open() + " at " + new Date();
	}

//	@RequestMapping("/load")
//	public String load() {
//		return "index.html";
//	}
	
	@RequestMapping(value = "/load")
	public ModelAndView showForm() {
		return new ModelAndView();
	}

	@RequestMapping("/exit")
	public String exit() {
		int exitCode = SpringApplication.exit(myApp);
		// System.exit(exitCode);
		return new Integer(exitCode).toString();
	}

	@Bean
	public ExitCodeGenerator exitCodeGenerator() {
		return () -> 42;
	}

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(Example.class);
		app.setBannerMode(Banner.Mode.LOG);
		myApp = app.run(args);
		// SpringApplication.run(Example.class, args);
	}
}