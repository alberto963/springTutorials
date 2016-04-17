package org.baeldung.context;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.baeldung.context.beans.Bean_0;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

/**
 * Servlet implementation class HttpServlet_1
 */
public class HttpServlet_1 extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Autowired
    private Bean_0 bean;

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

        String res = bean.api_0();
        System.out.println("HttpServlet_1 bean api_0=" + res);
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String res = bean.api_0();
        response.getWriter().append(res + " Served at: ").append(request.getContextPath());
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
