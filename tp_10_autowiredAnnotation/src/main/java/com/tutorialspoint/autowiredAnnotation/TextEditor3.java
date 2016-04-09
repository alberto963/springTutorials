package com.tutorialspoint.autowiredAnnotation;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * You can apply @Autowired to constructors as well. A constructor @Autowired
 * annotation indicates that the constructor should be autowired when creating
 * the bean, even if no <constructor-arg> elements are used while configuring
 * the bean in XML file.
 * 
 * @author apetazzi
 * 
 */
public class TextEditor3 {
	private final SpellChecker spellChecker;

	@Autowired(required = false)
	private SpellChecker2 spellChecker2 = null;

	@Autowired
	public TextEditor3(SpellChecker spellChecker) {
		System.out.println("Inside TextEditor constructor.");
		this.spellChecker = spellChecker;
		System.out.println("Inside TextEditor constructor spellChecker2=" + spellChecker2);

	}

	public void spellCheck() {
		System.out.println("Inside TextEditor#spellCheck spellChecker2=" + spellChecker2);

		spellChecker.checkSpelling();
	}
}
