package com.tutorialspoint.eventHandling;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * You have seen in all the chapters that core of Spring is the
 * ApplicationContext, which manages complete life cycle of the beans. The
 * ApplicationContext publishes certain types of events when loading the beans.
 * For example, a ContextStartedEvent is published when the context is started
 * and ContextStoppedEvent is published when the context is stopped.
 * 
 * Event handling in the ApplicationContext is provided through the
 * ApplicationEvent class and ApplicationListener interface. So if a bean
 * implements the ApplicationListener, then every time an ApplicationEvent gets
 * published to the ApplicationContext, that bean is notified.
 * 
 * @author apetazzi
 * 
 */
public class MainApp {
	public static void main(String[] args) {
		@SuppressWarnings("resource")
		ConfigurableApplicationContext context = new ClassPathXmlApplicationContext(
				"eventHandling/Beans.xml");

		/*
		 * ContextStartedEvent. This event is published when the
		 * ApplicationContext is started using the start() method on the
		 * ConfigurableApplicationContext interface. You can poll your database
		 * or you can re/start any stopped application after receiving this
		 * event.
		 */
		// Let us raise a start event.
		context.start();

		HelloWorld obj = (HelloWorld) context.getBean("helloWorld");
		HelloWorld2 obj2 = (HelloWorld2) context.getBean("helloWorld2");

		obj.getMessage();
		obj2.getMessage();

		/*
		 * ContextStoppedEvent. This event is published when the
		 * ApplicationContext is stopped using the stop() method on the
		 * ConfigurableApplicationContext interface. You can do required
		 * housekeeping work after receiving this event.
		 */
		// Let us raise a stop event.
		context.stop();
	}
}