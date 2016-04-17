package com.demo;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.demo.beans.Bean_0;

/**
 * Servlet implementation class HttpServlet_0
 */
public class HttpServlet_0 extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * Default constructor.
     */
    public HttpServlet_0() {
        System.out.println("HttpServlet_0");
    }

    @Override
    public void init(ServletConfig config) {
        ServletContext servletContext = config.getServletContext();

        System.out.println("HttpServlet_0 init contextPath=" + servletContext.getContextPath());

        try {
            super.init(config);
        } catch (ServletException e) {
            e.printStackTrace();
        }

        WebApplicationContext rootContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
        System.out.println("HttpServlet_0 init rootContext=" + rootContext);

        Bean_0 bean = rootContext.getBean(Bean_0.class);
        String res = bean.api_0();

        System.out.println("HttpServlet_0 bean api_0=" + res);
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().append("Served at: ").append(request.getContextPath());
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
