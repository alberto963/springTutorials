package com.demo;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.BeansException;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.FrameworkServlet;

public class MySpringServlet extends FrameworkServlet {

	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public MySpringServlet() {
		System.out.println("MySpringServlet constructor called");
	}

	@Override
	protected void initFrameworkServlet() throws ServletException, BeansException {
		super.initFrameworkServlet();

		WebApplicationContext servletSpecificContext = getWebApplicationContext();
		ServletContext servletContext = servletSpecificContext.getServletContext();
		System.out.println(
				"MySpringServlet initFrameworkServlet servletContext=" + servletContext.getServletContextName());
		System.out.println("MySpringServlet initFrameworkServlet servletSpecificContext contains Bean_0="
				+ servletSpecificContext.containsBean("com.demo.rootContext.Bean_C0_0"));
		System.out.println("MySpringServlet initFrameworkServlet servletSpecificContext contains Bean_1="
				+ servletSpecificContext.containsBean("com.demo.rootContext.Bean_C1_0"));
		System.out.println("MySpringServlet initFrameworkServlet servletSpecificContext contains Bean_2="
				+ servletSpecificContext.containsBean("com.demo.rootContext.Bean_C2_0"));

		System.out.println("MySpringServlet initFrameworkServlet servletSpecificContext=" + servletSpecificContext);

		WebApplicationContext rootContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
		System.out.println("MySpringServlet initFrameworkServlet rootContext=" + rootContext.getDisplayName());
		System.out.println("MySpringServlet initFrameworkServlet rootContext contains Bean_0="
				+ rootContext.containsBean("com.demo.rootContext.Bean_C0_0"));
		System.out.println("MySpringServlet initFrameworkServlet rootContext contains Bean_1="
				+ rootContext.containsBean("com.demo.rootContext.Bean_C1_0"));
		System.out.println("MySpringServlet initFrameworkServlet rootContext contains Bean_2="
				+ rootContext.containsBean("com.demo.rootContext.Bean_C2_0"));
	}

	@Override
	protected void doService(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}
}