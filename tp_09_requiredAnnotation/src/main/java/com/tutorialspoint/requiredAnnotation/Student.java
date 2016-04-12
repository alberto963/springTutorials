package com.tutorialspoint.requiredAnnotation;

import org.springframework.beans.factory.annotation.Required;

/**
 * The @Required annotation applies to bean property setter methods and it
 * indicates that the affected bean property must be populated in XML
 * configuration file at configuration time otherwise the container throws a
 * BeanInitializationException exception.
 * 
 * Below is an example to show the use of @Required annotation.
 * 
 * @author apetazzi
 * 
 */
public class Student {
	private Integer age;
	private String name;

	@Required
	public void setAge(Integer age) {
		this.age = age;
	}

	public Integer getAge() {
		return age;
	}

	@Required
	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
}