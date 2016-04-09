package com.tutorialspoint.requiredAnnotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"requiredAnnotation/Beans.xml");

		Student student = (Student) context.getBean("student");

		System.out.println("Name : " + student.getName());
		System.out.println("Age : " + student.getAge());
	}
}
