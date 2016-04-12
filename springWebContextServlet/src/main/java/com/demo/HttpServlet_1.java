package com.demo;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.demo.beans.Bean_0;

/**
 * Servlet implementation class HttpServlet_1
 */
public class HttpServlet_1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Autowired
	private Bean_0 bean;

//	@Autowired
//	private Bean_1 bean2;

	/**
	 * Default constructor.
	 */
	public HttpServlet_1() {
		System.out.println("HttpServlet_1");
	}

	@Override
	public void init(ServletConfig config) {
		ServletContext servletContext = config.getServletContext();
		
		System.out.println("HttpServlet_1 init contextPath=" + servletContext.getContextPath());

		try {
			super.init(config);
		} catch (ServletException e) {
			e.printStackTrace();
		}

		SpringBeanAutowiringSupport.processInjectionBasedOnServletContext(this, servletContext);

		// SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);

		String res = bean.api_0();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String res = bean.api_0();
//		String res2 = bean2.api_0();

//		response.getWriter().append(res2 + " Served at: ").append(request.getContextPath());
		response.getWriter().append(" Served at: ").append(request.getContextPath());
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
