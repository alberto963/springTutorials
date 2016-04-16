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
import com.demo.beans.Bean_2;

public class FrameworkServlet_1 extends FrameworkServlet {

	private static final long serialVersionUID = 1L;

	@Autowired
	private Bean_0 bean0;

	// @Autowired
	// private Bean_2 bean2;

	/**
	 * Default constructor.
	 */
	public FrameworkServlet_1() {
		System.out.println("FrameworkServlet_1 constructor called");
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
				"FrameworkServlet_1 initFrameworkServlet servletContext=" + servletContext.getServletContextName());

		/*
		 * Root context.
		 */
		System.out.println("FrameworkServlet_1 initFrameworkServlet rootContext=" + rootContext.getDisplayName());

		System.out.println("FrameworkServlet_1 initFrameworkServlet rootContext contains Bean_0="
				+ rootContext.containsBean("com.demo.beans.Bean_0"));
		System.out.println("FrameworkServlet_1 initFrameworkServlet rootContext contains Bean_1="
				+ rootContext.containsBean("com.demo.beans.Bean_1"));
		System.out.println("FrameworkServlet_1 initFrameworkServlet rootContext contains Bean_2="
				+ rootContext.containsBean("com.demo.beans.Bean_2"));

		/*
		 * Servlet specific context.
		 */
		System.out.println("FrameworkServlet_1 initFrameworkServlet servletSpecificContext="
				+ servletSpecificContext.getDisplayName());

		System.out.println("FrameworkServlet_1 initFrameworkServlet servletSpecificContext contains Bean_0="
				+ servletSpecificContext.containsBean("com.demo.beans.Bean_0"));
		System.out.println("FrameworkServlet_1 initFrameworkServlet servletSpecificContext contains Bean_1="
				+ servletSpecificContext.containsBean("com.demo.beans.Bean_1"));
		System.out.println("FrameworkServlet_1 initFrameworkServlet servletSpecificContext contains Bean_2="
				+ servletSpecificContext.containsBean("com.demo.beans.Bean_2"));

		/*
		 * --- Beans
		 */
		/*
		 * Process @Autowired injection for the given target object, based on
		 * the current web application context.
		 */
		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);

		String res = bean0.api_0();
		System.out.println("FrameworkServlet_0 api_0=" + res);

		/*
		 * TODO how to inject bean2?
		 */
		// SpringBeanAutowiringSupport.processInjectionBasedOnServletContext(this,
		// (ServletContext) servletSpecificContext);

		SpringBeanAutowiringSupport.processInjectionBasedOnServletContext(this, servletContext);
		// String res2 = bean2.api_0();
		// System.out.println("FrameworkServlet_0 bean2 api_0=" + res2);

	}

	@Override
	protected void doService(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}
}