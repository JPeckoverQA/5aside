package com.qa.repository;

import java.util.List;

import com.qa.model.Player;

public interface PlayerRepository {
	
	//CREATE
	public Player create(Player player);
	
	//READ 
	public Player read(int id);
	
	//verify email
	public List<Player> emailVerification(String emailInput);
	
	//READ ALL
	public List<Player> readAll();
	
	//UPDATE
	public Player update(int id, Player player);
	
	//DELETE
	public void delete(int id);

}
