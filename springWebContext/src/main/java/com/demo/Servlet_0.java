package com.demo;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;
import org.springframework.web.context.support.WebApplicationContextUtils;

/**
 * Servlet implementation class Servlet_0
 */
public class Servlet_0 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Autowired
	private ServletContext servletContext;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Servlet_0() {
		super();
		System.out.println("Servlet_0");
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.GenericServlet#init(javax.servlet.ServletConfig)
	 * 
	 * http://stackoverflow.com/questions/11843690/autowiring-in-servlet
	 */
	@Override
	public void init(ServletConfig config) {
		System.out.println("Servlet_0 init");

		try {
			super.init(config);
		} catch (ServletException e) {
			e.printStackTrace();
		}

		SpringBeanAutowiringSupport.processInjectionBasedOnServletContext(this, config.getServletContext());
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/*
		 * We can obtain this root WebApplicationContext object from
		 * ServletContext by using
		 * org.springframework.web.context.support.WebApplicationContextUtils
		 */
		WebApplicationContext rootContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);

		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
