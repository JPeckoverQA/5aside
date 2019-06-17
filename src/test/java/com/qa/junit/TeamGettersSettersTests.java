package com.qa.junit;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

import com.qa.model.Team;


public class TeamGettersSettersTests {
	
	Team team;
	
	@Before
	public void setup() {
		team = new Team();
	}
	
	@Test
	public void setNameTest() {
		team.setName("Dynamo Buchartest");
		assertEquals("set name failed", "Dynamo Buchartest", team.getName());
	}
	
	@Test
	public void setHomeColourTest() {
		team.setHomeColour("red");
		assertEquals("set home colour failed", "red", team.getHomeColour());
	}
	
	@Test
	public void setAwayColourTest() {
		team.setAwayColour("white");
		assertEquals("set away colour failed", "white", team.getAwayColour());
	}

	
	
}
