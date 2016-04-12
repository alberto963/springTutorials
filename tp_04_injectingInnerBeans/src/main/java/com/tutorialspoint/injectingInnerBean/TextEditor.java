package com.tutorialspoint.injectingInnerBean;

/**
 * Here you need to check naming convention of the setter methods. To set a
 * variable spellChecker we are using setSpellChecker() method which is very
 * similar to Java POJO classes.
 * 
 * @author apetazzi
 * 
 */
public class TextEditor {
	private SpellChecker spellChecker;

	// a setter method to inject the dependency.
	public void setSpellChecker(SpellChecker spellChecker) {
		System.out.println("Inside setSpellChecker.");
		this.spellChecker = spellChecker;
	}

	// a getter method to return spellChecker
	public SpellChecker getSpellChecker() {
		return spellChecker;
	}

	public void setVersion(int version) {

	}

	public void setManufacturer(String manufacturer) {

	}

	public void spellCheck() {
		spellChecker.checkSpelling();
	}
}
