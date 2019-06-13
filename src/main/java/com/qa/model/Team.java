package com.qa.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private String homeColour;
	private String awayColour;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHomeColour() {
		return homeColour;
	}
	public void setHomeColour(String homeColour) {
		this.homeColour = homeColour;
	}
	public String getAwayColour() {
		return awayColour;
	}
	public void setAwayColour(String awayColour) {
		this.awayColour = awayColour;
	}
}
	