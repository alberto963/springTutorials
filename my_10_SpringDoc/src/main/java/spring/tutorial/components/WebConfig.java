package spring.tutorial.components;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@EnableWebMvc
@Configuration
public class WebConfig implements WebMvcConfigurer {

//	@Override
//	public void addViewControllers(ViewControllerRegistry registry) {
//		registry.addViewController("/load").setViewName("index.html");
//	}

//	@Override
//	public void addResourceHandlers(ResourceHandlerRegistry registry) {
//		WebMvcConfigurer.super.addResourceHandlers(registry);
//		String pathPatterns = "dist/**";
//		registry.addResourceHandler(pathPatterns).addResourceLocations("/" + pathPatterns);
//	}

	@Bean
	public ViewResolver viewResolver() {
		InternalResourceViewResolver bean = new InternalResourceViewResolver();

		// bean.setViewClass(JstlView.class);
		bean.setPrefix("/dist/");
		bean.setSuffix(".html");
		bean.setOrder(2);

		return bean;
	}
}