package com.qa.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import com.qa.model.Player;

	
@Transactional(value = TxType.SUPPORTS)
public class PlayerDB implements PlayerRepository {
	
	@PersistenceContext(unitName = "myPU")
	private EntityManager em;
	
	@Transactional(value = TxType.REQUIRED)			 //TRANSACTION
	public Player create(Player player) {
		em.persist(player);
		return player;
	}
	
	public Player read(int id) {		//find player by id for login verification
		Player player = em.find(Player.class, id);
		return player;
	}
	
	public List<Player> readAll(){		//find all
		TypedQuery<Player> readAllQuery = em.createQuery("Select plyr from Player plyr", Player.class);
		List<Player> list = readAllQuery.getResultList();
		return list;
	}
	
	public List<Player> emailVerification(String emailInput){		//verify email
		String stmt = "SELECT * FROM PLAYER " + "WHERE EMAIL = " + emailInput;
		TypedQuery<Player> verifyQuery = em.createQuery(stmt, Player.class);
		List<Player> list = verifyQuery.getResultList();
		return list;
	}
	
	@Transactional(value = TxType.REQUIRED)
	public Player update(int id, Player newInfo) {
		Player player = read(id);
		player.setForename(newInfo.getForename());
		player.setSurname(newInfo.getSurname());
		player.setContactNo(newInfo.getContactNo());
		player.setEmail(newInfo.getEmail());
		player.setTeamPin(newInfo.getTeamPin());
		return player;		
	}
	
	@Transactional(value = TxType.REQUIRED)
	public void delete(int id) {
		em.remove(read(id));
	}

}
