package org.baeldung.context;

import org.baeldung.context.beans.Bean_0;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {
        /*
         * Central interface to provide configuration for an application.
         *  This is read-only while the application is running, but may be reloaded if the implementation supports this. 
        An ApplicationContext provides:
        
        Bean factory methods for accessing application components. Inherited from ListableBeanFactory. 
        The ability to load file resources in a generic fashion. Inherited from the ResourceLoader interface. 
        The ability to publish events to registered listeners. Inherited from the ApplicationEventPublisher interface. 
        The ability to resolve messages, supporting internationalization. Inherited from the MessageSource interface. 
        Inheritance from a parent context. Definitions in a descendant context will always take priority. This means, for example, that a single parent context can be used by an entire web application, while each servlet has its own child context that is independent of that of any other servlet. 
        
        In addition to standard BeanFactory lifecycle capabilities, ApplicationContext implementations detect and invoke ApplicationContextAware beans as well as ResourceLoaderAware, ApplicationEventPublisherAware and MessageSourceAware beans.
        
         */
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring/application-config.xml");

        System.out.println("MainApp initFrameworkServlet applicationContext=" + applicationContext.getApplicationName());

        System.out.println("MainApp initFrameworkServlet applicationContext contains Bean_0=" + applicationContext.containsBean("org.baeldung.context.beans.Bean_0"));

        Bean_0 bean0 = (Bean_0) applicationContext.getBean("org.baeldung.context.beans.Bean_0");
        String res = bean0.api_0();
        System.out.println("MainApp api_0=" + res);
    }
}
