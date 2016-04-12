package com.tutorialspoint.injectingCollection;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

/**
 * You have seen how to configure primitive data type using value attribute and
 * object references using ref attribute of the <property> tag in your Bean
 * configuration file. Both the cases deal with passing singular value to a
 * bean.
 * 
 * Now what about if you want to pass plural values like Java Collection types
 * List, Set, Map, and Properties. To handle the situation, Spring offers four
 * types of collection configuration elements which are as follows:
 * 
 * Element Description: <list> This helps in wiring ie injecting a list of
 * values, allowing duplicates.
 * 
 * Element Description: <set> This helps in wiring a set of values but without
 * any duplicates.
 * 
 * Element Description: <map> This can be used to inject a collection of
 * name-value pairs where name and value can be of any type.
 * 
 * Element Description: <props> This can be used to inject a collection of
 * name-value pairs where the name and value are both Strings.
 * 
 * 
 * You can use either <list> or <set> to wire any implementation of
 * java.util.Collection or an array.
 * 
 * You will come across two situations (a) Passing direct values of the
 * collection and (b) Passing a reference of a bean as one of the collection
 * elements.
 * 
 * @author apetazzi
 * 
 */
public class JavaCollection {
	List<?> addressList;
	Set<?> addressSet;
	Map<?, ?> addressMap;
	Properties addressProp;

	// a setter method to set List
	public void setAddressList(List<?> addressList) {
		this.addressList = addressList;
	}

	// prints and returns all the elements of the list.
	public List<?> getAddressList() {
		System.out.println("List Elements :" + addressList);
		return addressList;
	}

	// a setter method to set Set
	public void setAddressSet(Set<?> addressSet) {
		this.addressSet = addressSet;
	}

	// prints and returns all the elements of the Set.
	public Set<?> getAddressSet() {
		System.out.println("Set Elements :" + addressSet);
		return addressSet;
	}

	// a setter method to set Map
	public void setAddressMap(Map<?, ?> addressMap) {
		this.addressMap = addressMap;
	}

	// prints and returns all the elements of the Map.
	public Map<?, ?> getAddressMap() {
		System.out.println("Map Elements :" + addressMap);
		return addressMap;
	}

	// a setter method to set Property
	public void setAddressProp(Properties addressProp) {
		this.addressProp = addressProp;
	}

	// prints and returns all the elements of the Property.
	public Properties getAddressProp() {
		System.out.println("Property Elements :" + addressProp);
		return addressProp;
	}
}
