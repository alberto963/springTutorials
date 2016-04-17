package org.baeldung.context;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.baeldung.context.beans.Bean_0;
import org.baeldung.context.beans.Bean_1;
import org.baeldung.context.services.Service_0;
import org.baeldung.context.services.Service_0_Impl;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.FrameworkServlet;

/**
 * As detailed in Section 6.15, “Additional Capabilities of the
 * ApplicationContext”, ApplicationContext instances in Spring can be scoped. In
 * the Web MVC framework, each DispatcherServlet has its own
 * WebApplicationContext, which inherits all the beans already defined in the
 * root WebApplicationContext. These inherited beans can be overridden in the
 * servlet-specific scope, and you can define new scope-specific beans local to
 * a given Servlet instance.
 * 
 * 
 * The WebApplicationContext is an extension of the plain ApplicationContext
 * that has some extra features necessary for web applications. It differs from
 * a normal ApplicationContext in that it is capable of resolving themes (see
 * Section 21.9, “Using themes”), and that it knows which Servlet it is
 * associated with (by having a link to the ServletContext). The
 * WebApplicationContext is bound in the ServletContext, and by using static
 * methods on the RequestContextUtils class you can always look up the
 * WebApplicationContext if you need access to it.
 * 
 * Once you have a reference to the WebApplicationContext, you can retrieve
 * beans by their name or type. Most developers retrieve beans by name and then
 * cast them to one of their implemented interfaces. Fortunately, most of the
 * frameworks in this section have simpler ways of looking up beans. Not only do
 * they make it easy to get beans from a Spring container, but they also allow
 * you to use dependency injection on their controllers. Each web framework
 * section has more detail on its specific integration strategies.
 *
 */
public class FrameworkServlet_0 extends FrameworkServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Default constructor.
     */
    public FrameworkServlet_0() {
        System.out.println("FrameworkServlet_0 constructor called");

        /*
         * A WebApplicationContext variant of AnnotationConfigApplicationContext
         * is available with AnnotationConfigWebApplicationContext. This
         * implementation may be used when configuring the Spring
         * ContextLoaderListener servlet listener, Spring MVC DispatcherServlet,
         * etc.
         */
        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
        Service_0 service_0 = applicationContext.getBean(Service_0_Impl.class);

        String res1 = service_0.api_0();

        System.out.println("FrameworkServlet_0 constructor api_0=" + res1);
    }

    /*
     * This method will be invoked after any bean properties have been set and the WebApplicationContext has been loaded. 
     * The default implementation is empty; subclasses may override this method to perform any initialization they require.
     */
    @Override
    protected void initFrameworkServlet() throws ServletException, BeansException {
        super.initFrameworkServlet();

        /*
         * WebApplicationContext: Interface to provide configuration for a web
         * application. This is read-only while the application is running, but
         * may be reloaded if the implementation supports this. This interface
         * adds a getServletContext() method to the generic ApplicationContext
         * interface, and defines a well-known application attribute name that
         * the root context must be bound to in the bootstrap process.
         * 
         * Like generic application contexts, web application contexts are
         * hierarchical. There is a single root context per application, while
         * each servlet in the application (including a dispatcher servlet in
         * the MVC framework) has its own child context.
         * 
         * In addition to standard application context lifecycle capabilities,
         * WebApplicationContext implementations need to detect
         * ServletContextAware beans and invoke the setServletContext method
         * accordingly.
         * 
         */
        /*
         * We can get directly servlet specific context.
         * 
         * getWebApplicationContext: Return this servlet's
         * WebApplicationContext.
         */
        WebApplicationContext servletSpecificContext = getWebApplicationContext();

        /*
         * We can get root context from servlet context.
         * 
         * getServletContext: Return the standard Servlet API ServletContext for
         * this application. Also available for a Portlet application, in
         * addition to the PortletContext.
         * 
         */
        ServletContext servletContext = servletSpecificContext.getServletContext();
        WebApplicationContext rootContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);

        /*
         * Servlet context (web.xml).
         */
        System.out.println("FrameworkServlet_0 initFrameworkServlet servletContext=" + servletContext.getServletContextName());

        /*
         * Root context.
         */
        System.out.println("FrameworkServlet_0 initFrameworkServlet rootContext=" + rootContext.getDisplayName());

        System.out.println("FrameworkServlet_0 initFrameworkServlet rootContext contains Bean_0=" + rootContext.containsBean("org.baeldung.context.beans.Bean_0"));
        System.out.println("FrameworkServlet_0 initFrameworkServlet rootContext contains Bean_1=" + rootContext.containsBean("org.baeldung.context.beans.Bean_1"));
        System.out.println("FrameworkServlet_0 initFrameworkServlet rootContext contains Bean_2=" + rootContext.containsBean("org.baeldung.context.beans.Bean_2"));

        /*
         * Servlet specific context.
         */
        System.out.println("FrameworkServlet_0 initFrameworkServlet servletSpecificContext=" + servletSpecificContext.getDisplayName());

        System.out.println("FrameworkServlet_0 initFrameworkServlet servletSpecificContext contains Bean_0=" + servletSpecificContext.containsBean("org.baeldung.context.beans.Bean_0"));
        System.out.println("FrameworkServlet_0 initFrameworkServlet servletSpecificContext contains Bean_1=" + servletSpecificContext.containsBean("org.baeldung.context.beans.Bean_1"));
        System.out.println("FrameworkServlet_0 initFrameworkServlet servletSpecificContext contains Bean_2=" + servletSpecificContext.containsBean("org.baeldung.context.beans.Bean_2"));

        Bean_0 bean0 = rootContext.getBean(Bean_0.class);
        String res = bean0.api_0();

        System.out.println("FrameworkServlet_0 api_0=" + res);

        Bean_1 bean1 = servletSpecificContext.getBean(Bean_1.class);
        String res1 = bean1.api_0();

        System.out.println("FrameworkServlet_0 api_0=" + res1);

        /*
         * Bean_0 can be created on servletSpecificContext (as it inherits root
         * context).
         */
        Bean_0 bean0_2 = servletSpecificContext.getBean(Bean_0.class);
    }

    @Override
    protected void doService(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}