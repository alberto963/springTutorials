package com.tutorialspoint.autowiredAnnotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"autowiredAnnotation/Beans.xml");

		TextEditor te = (TextEditor) context.getBean("textEditor");

		te.spellCheck();

		TextEditor2 te2 = (TextEditor2) context.getBean("textEditor2");

		te2.spellCheck();

		TextEditor3 te3 = (TextEditor3) context.getBean("textEditor3");

		te3.spellCheck();
	}
}
