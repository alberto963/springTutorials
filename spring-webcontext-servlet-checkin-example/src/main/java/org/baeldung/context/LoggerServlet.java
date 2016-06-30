package org.baeldung.context;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.baeldung.context.beans.LogConfiguration;
import org.baeldung.context.beans.LogAccessService;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;
import org.springframework.web.servlet.FrameworkServlet;

@SuppressWarnings("serial")
public class LoggerServlet extends FrameworkServlet {

    @Autowired
    private LogConfiguration environment;

    @Override
    protected void initFrameworkServlet() throws ServletException, BeansException {
        super.initFrameworkServlet();
        SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
    }

    @Override
    protected void doService(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String companyName = environment.getCompanyName();
        LogAccessService service = getWebApplicationContext().getBean(LogAccessService.class);
        String ret = service.logAccess(request.getRequestURL() + "@" + companyName);
        response.getWriter().append(ret + " Served at: ").append(request.getContextPath());
    }
}