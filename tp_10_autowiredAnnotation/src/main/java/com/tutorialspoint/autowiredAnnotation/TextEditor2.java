package com.tutorialspoint.autowiredAnnotation;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * 
 * @Autowired on Properties: byType
 * 
 *            You can use @Autowired annotation on properties to get rid of the
 *            setter methods. When you will pass values of autowired properties
 *            using <property> Spring will automatically assign those properties
 *            with the passed values or references
 * 
 * @author apetazzi
 * 
 */
public class TextEditor2 {
	@Autowired
	private SpellChecker spellChecker;

	public SpellChecker getSpellChecker() {
		return spellChecker;
	}

	public void spellCheck() {
		spellChecker.checkSpelling();
	}
}