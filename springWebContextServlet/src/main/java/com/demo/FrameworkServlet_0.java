package com.demo;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.FrameworkServlet;

import com.demo.beans.Bean_0;
import com.demo.beans.Bean_1;

public class FrameworkServlet_0 extends FrameworkServlet {

	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public FrameworkServlet_0() {
		System.out.println("MySpringServlet constructor called");
	}

	@Override
	protected void initFrameworkServlet() throws ServletException, BeansException {
		super.initFrameworkServlet();

		/*
		 * We can get directly servlet specific context.
		 */
		WebApplicationContext servletSpecificContext = getWebApplicationContext();

		/*
		 * We can get root context from servlet context.
		 */
		ServletContext servletContext = servletSpecificContext.getServletContext();
		WebApplicationContext rootContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);

		/*
		 * Servlet context (web.xml).
		 */
		System.out.println(
				"FrameworkServlet_0 initFrameworkServlet servletContext=" + servletContext.getServletContextName());

		/*
		 * Root context.
		 */
		System.out.println("FrameworkServlet_0 initFrameworkServlet rootContext=" + rootContext.getDisplayName());

		System.out.println("FrameworkServlet_0 initFrameworkServlet rootContext contains Bean_0="
				+ rootContext.containsBean("com.demo.beans.Bean_0"));
		System.out.println("FrameworkServlet_0 initFrameworkServlet rootContext contains Bean_1="
				+ rootContext.containsBean("com.demo.beans.Bean_1"));
		System.out.println("FrameworkServlet_0 initFrameworkServlet rootContext contains Bean_2="
				+ rootContext.containsBean("com.demo.beans.Bean_2"));

		/*
		 * Servlet specific context.
		 */
		System.out.println("FrameworkServlet_0 initFrameworkServlet servletSpecificContext="
				+ servletSpecificContext.getDisplayName());

		System.out.println("FrameworkServlet_0 initFrameworkServlet servletSpecificContext contains Bean_0="
				+ servletSpecificContext.containsBean("com.demo.beans.Bean_0"));
		System.out.println("FrameworkServlet_0 initFrameworkServlet servletSpecificContext contains Bean_1="
				+ servletSpecificContext.containsBean("com.demo.beans.Bean_1"));
		System.out.println("FrameworkServlet_0 initFrameworkServlet servletSpecificContext contains Bean_2="
				+ servletSpecificContext.containsBean("com.demo.beans.Bean_2"));
		
		Bean_0 bean = rootContext.getBean(Bean_0.class);
		String res = bean.api_0();
		
		System.out.println("FrameworkServlet_0 api_0=" + res);
		
		Bean_1 bean1 = servletSpecificContext.getBean(Bean_1.class);
		String res1 = bean1.api_0();
		
		System.out.println("FrameworkServlet_0 api_0=" + res1);
		
		/*
		 * Bean_0 can be created on servletSpecificContext (as it inherits root context).
		 */
		Bean_0 bean0 = servletSpecificContext.getBean(Bean_0.class);
		
	}

	@Override
	protected void doService(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}
}