package com.qa.rest;

import java.net.URI;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;


import com.qa.model.Player;

import com.qa.repository.PlayerRepository;


@Path("/")
public class PlayerEndpoint {

	@Inject
	private PlayerRepository playerRepository;
	
	
	@GET
	@Path("/player")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		List<Player> list = playerRepository.readAll();
		if (list.isEmpty()) {
			return Response.noContent().build();
		}
		return Response.ok(list).build();	
	}
	
	@GET
	@Path("/player/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getOne(@PathParam("id") int id) {
		if (playerRepository.read(id).equals(null)) {
			return Response.status(Status.NOT_FOUND).build();
		}
		Player player = playerRepository.read(id);
		return Response.ok(player).build();
	}
	
	@POST
	@Consumes({ "application/json" })
	@Produces(MediaType.TEXT_PLAIN)
	@Path("/player")
	public Response addPlayer(Player playerRS, @Context UriInfo uriInfo) {
		playerRS = playerRepository.create(playerRS);
		URI createdURI = uriInfo.getBaseUriBuilder().path("" + playerRS.getId()).build();
		System.out.println(createdURI);
		return Response.ok(createdURI.toString()).status(Status.CREATED).build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes({ "application/json" })
	@Path("/player/{id}")
	public Response updatePlayer(Player player, @PathParam("id") int id) {
		if (playerRepository.read(id).equals(null)) {
			return Response.status(Status.NOT_FOUND).build();
		}
		Player playerRS2 = playerRepository.update(id, player);
		return Response.ok(playerRS2).build();
	}
	
	@DELETE
	@Path("/player/{id}")
	public Response deletePlayer(@PathParam("id") int id) {
		if (playerRepository.read(id).equals(null)) {
			return Response.status(Status.NOT_FOUND).build();
		}
		playerRepository.delete(id);
		return Response.noContent().build();
	}
	
	
}
