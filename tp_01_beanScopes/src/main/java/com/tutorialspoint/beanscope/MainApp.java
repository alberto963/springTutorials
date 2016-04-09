package com.tutorialspoint.beanscope;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {

		/*
		 * The singleton scope:
		 * 
		 * If scope is set to singleton, the Spring IoC container creates
		 * exactly one instance of the object defined by that bean definition.
		 * This single instance is stored in a cache of such singleton beans,
		 * and all subsequent requests and references for that named bean return
		 * the cached object.
		 * 
		 * The default scope is always singleton however, when you need one and
		 * only one instance of a bean, you can set the scope property to
		 * singleton in the bean configuration file, as shown in Beans.xml
		 */
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"beanscope/Beans.xml");

		HelloWorld objA = (HelloWorld) context.getBean("helloWorld");

		objA.setMessage("I'm object A");
		objA.getMessage();

		HelloWorld objB = (HelloWorld) context.getBean("helloWorld");
		objB.getMessage();

		/*
		 * The prototype scope:
		 * 
		 * If scope is set to prototype, the Spring IoC container creates new
		 * bean instance of the object every time a request for that specific
		 * bean is made. As a rule, use the prototype scope for all state-full
		 * beans and the singleton scope for stateless beans.
		 * 
		 * To define a prototype scope, you can set the scope property to
		 * prototype in the bean configuration file, as shown in Beans2.xml:
		 */
		HelloWorld objA2 = (HelloWorld) context.getBean("helloWorld2");

		objA2.setMessage("I'm object A2");
		objA2.getMessage();

		HelloWorld objB2 = (HelloWorld) context.getBean("helloWorld2");
		objB2.getMessage();
	}
}
