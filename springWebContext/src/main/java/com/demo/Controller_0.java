package com.demo;

import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

/**
 * Hints from:
 * http://java-journal.blogspot.it/2012/08/webappicationcontext-and_5211.html
 *
 */
@Controller
public class Controller_0 {

	@Autowired
	ServletContext servletContext;

	@RequestMapping("/getJsonRest")
	public @ResponseBody List<Simple> getJsonRest(HttpServletRequest request) {

		System.out.println("Controller_0 received getJsonRest");

		/*
		 * We can obtain this root WebApplicationContext object from
		 * ServletContext by using
		 * org.springframework.web.context.support.WebApplicationContextUtils
		 */
		WebApplicationContext rootContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);

		Bean_C0_0 bean = rootContext.getBean(Bean_C0_0.class);
		String res = bean.api_0();

		List<Simple> r = new LinkedList<Simple>();
		r.add(new Simple());

		return r;
	}

	static class Simple {
		private String name = "";
		private int age = 0;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public int getAge() {
			return age;
		}

		public void setAge(int age) {
			this.age = age;
		}
	}
}
