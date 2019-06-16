package com.qa.repository;

import java.util.List;

import com.qa.model.Player;
import com.qa.model.Team;

public interface TeamRepository {
	
	//CREATE
	public Team create(Team team);
	
	//READ 
	public Team read(int id);
	//READ ALL
	public List<Team> readAll();
	
	//get team pin
	public List<Team> getTeamName(String teamName);
	
	//UPDATE
	public Team update(int id, Team team);
	
	//DELETE
	public void delete(int id);

}
