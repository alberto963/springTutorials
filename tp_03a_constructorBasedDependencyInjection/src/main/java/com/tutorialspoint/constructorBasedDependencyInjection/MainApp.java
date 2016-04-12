package com.tutorialspoint.constructorBasedDependencyInjection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Constructor-based DI is accomplished when the container invokes a class
 * constructor with a number of arguments, each representing a dependency on
 * other class.
 * 
 * The following example shows a class TextEditor that can only be
 * dependency-injected with constructor injection.
 * 
 * @author apetazzi
 * 
 */
public class MainApp {
	public static void main(String[] args) {

		/*
		 * The configuration file Beans.xml which has configuration for the
		 * constructor-based injection.
		 */
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"constructorBasedDependencyInjection/Beans.xml");

		TextEditor te = (TextEditor) context.getBean("textEditor");

		te.spellCheck();

		/*
		 * There may be a ambiguity exist while passing arguments to the
		 * constructor in case there are more than one parameters. To resolve
		 * this ambiguity, the order in which the constructor arguments are
		 * defined in a bean definition is the order in which those arguments
		 * are supplied to the appropriate constructor.
		 * 
		 * The container can also use type matching with simple types if you
		 * explicitly specify the type of the constructor argument using the
		 * type attribute.
		 * 
		 * Finally and the best way to pass constructor arguments, use the index
		 * attribute to specify explicitly the index of constructor arguments.
		 * Here the index is 0 based.
		 * 
		 * To check the above considerations, please take a look at Beans.xml
		 * definition file.
		 */
		TextEditor te2 = (TextEditor) context.getBean("textEditor2");

		te2.spellCheck();
	}
}
