package com.tutorialspoint.setterBasedDependencyInjection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Setter-based DI is accomplished by the container calling setter methods on
 * your beans after invoking a no-argument constructor or no-argument static
 * factory method to instantiate your bean.
 * 
 * The following example shows a class TextEditor that can only be
 * dependency-injected using pure setter-based injection.
 * 
 * @author apetazzi
 * 
 */
public class MainApp {
	public static void main(String[] args) {
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"setterBasedDependencyInjection/Beans.xml");

		TextEditor te = (TextEditor) context.getBean("textEditor");

		te.spellCheck();

		TextEditor te2 = (TextEditor) context.getBean("textEditor2");

		te2.spellCheck();
	}
}
