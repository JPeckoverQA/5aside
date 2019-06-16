package com.qa.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import com.qa.model.Player;
import com.qa.model.Team;

	
@Transactional(value = TxType.SUPPORTS)
public class TeamDB implements TeamRepository {
	
	@PersistenceContext(unitName = "myPU")
	private EntityManager em;
	
	@Transactional(value = TxType.REQUIRED)			 //TRANSACTION
	public Team create(Team team) {
		em.persist(team);
		return team;
	}
	
	public Team read(int id) {		//find id
		Team team = em.find(Team.class, id);
		return team;
	}
	
	public List<Team> readAll(){		//find all
		TypedQuery<Team> q = em.createQuery("Select teamm from Team team", Team.class);
		List<Team> list = q.getResultList();
		return list;
	}
	
	//find team by name for pin 
	public List<Team> getPinByName(String teamNameInput){
		String stmt = "SELECT team FROM Team team WHERE name='" + teamNameInput + "'";
		TypedQuery<Team> verifyQuery = em.createQuery(stmt, Team.class);
		List<Team> list = verifyQuery.getResultList();
		return list;
	}
	
	
	@Transactional(value = TxType.REQUIRED)
	public Team update(int id, Team newInfo) {
		Team team = read(id);
		team.setName(newInfo.getName());
		team.setHomeColour(newInfo.getHomeColour());
		team.setAwayColour(newInfo.getAwayColour());

		return team;		
	}
	
	@Transactional(value = TxType.REQUIRED)
	public void delete(int id) {
		em.remove(read(id));
	}

}
