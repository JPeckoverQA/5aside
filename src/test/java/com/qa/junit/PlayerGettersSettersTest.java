package com.qa.junit;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

import com.qa.model.Player;


public class PlayerGettersSettersTest {
	
	Player player;
	
	@Before
	public void setup() {
		player = new Player();
	}
	
	@Test
	public void setForenameTest() {
		player.setForename("N'golo");
		assertEquals("set forename failed", "N'golo", player.getForename());
	}
	
	@Test
	public void setSurnameTest() {
		player.setSurname("Kante");
		assertEquals("set surname failed", "Kante", player.getSurname());
	}
	
	@Test
	public void setContactNoTest() {
		player.setContactNo("07482336985");
		assertEquals("set contact no. failed", "07482336985", player.getContactNo());
	}
	
	@Test
	public void setEmailTest() {
		player.setEmail("ngolo@gmail.com");
		assertEquals("set email failed", "ngolo@gmail.com", player.getEmail());
	}
	
	@Test
	public void setTeamPinTest() {
		player.setTeamPin(22);
		assertEquals("set team pin failed", 22, player.getTeamPin());
	}
	
	
}
