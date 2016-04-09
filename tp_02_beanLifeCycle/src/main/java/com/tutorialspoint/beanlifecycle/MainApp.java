package com.tutorialspoint.beanlifecycle;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * The life cycle of a Spring bean is easy to understand. When a bean is
 * instantiated, it may be required to perform some initialization to get it
 * into a usable state. Similarly, when the bean is no longer required and is
 * removed from the container, some cleanup may be required.
 * 
 * Though, there is lists of the activities that take place behind the scenes
 * between the time of bean Instantiation and its destruction, but this chapter
 * will discuss only two important bean lifecycle callback methods which are
 * required at the time of bean initialization and its destruction.
 * 
 * To define setup and teardown for a bean, we simply declare the <bean> with
 * init-method and/or destroy-method parameters. The init-method attribute
 * specifies a method that is to be called on the bean immediately upon
 * instantiation. Similarly, destroy-method specifies a method that is called
 * just before a bean is removed from the container.
 * 
 * @author apetazzi
 * 
 */
public class MainApp {
	public static void main(String[] args) {

		@SuppressWarnings("resource")
		AbstractApplicationContext context = new ClassPathXmlApplicationContext(
				"beanlifecycle/Beans.xml");

		HelloWorld obj = (HelloWorld) context.getBean("helloWorld");

		obj.getMessage();

		/*
		 * If you have too many beans having initialization and or destroy
		 * methods with the same name, you don't need to declare init-method and
		 * destroy-method on each individual bean. Instead framework provides
		 * the flexibility to configure such situation using default-init-method
		 * and default-destroy-method attributes on the <beans> element as in
		 * Beans2.xml
		 */
		@SuppressWarnings("resource")
		AbstractApplicationContext context2 = new ClassPathXmlApplicationContext(
				"beanlifecycle/Beans2.xml");

		HelloWorld obj1 = (HelloWorld) context2.getBean("helloWorld1");
		HelloWorld obj2 = (HelloWorld) context2.getBean("helloWorld2");
		HelloWorld obj3 = (HelloWorld) context2.getBean("helloWorld3");

		obj1.getMessage();
		obj2.getMessage();
		obj3.getMessage();

		/*
		 * Here you need to register a shutdown hook registerShutdownHook()
		 * method that is declared on the AbstractApplicationContext class. This
		 * will ensures a graceful shutdown and calls the relevant destroy
		 * methods.
		 */
		context.registerShutdownHook();
		context2.registerShutdownHook();
	}
}
