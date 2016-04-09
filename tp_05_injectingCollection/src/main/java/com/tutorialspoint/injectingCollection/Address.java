package com.tutorialspoint.injectingCollection;

public class Address {
	@Override
	public String toString() {
		return "Address [country=" + country + "]";
	}

	private String country;

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

}
