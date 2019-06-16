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
import com.qa.model.Team;

import com.qa.repository.TeamRepository;


@Path("/")
public class TeamEndpoint {

	@Inject
	private TeamRepository teamRepository;
	
	
	@GET
	@Path("/team")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		List<Team> list = teamRepository.readAll();
		if (list.isEmpty()) {
			return Response.noContent().build();
		}
		return Response.ok(list).build();	
	}
	
	@GET
	@Path("/team/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getOne(@PathParam("id") int id) {
		if (teamRepository.read(id).equals(null)) {
			return Response.status(Status.NOT_FOUND).build();
		}
		Team team = teamRepository.read(id);
		return Response.ok(team).build();
	}
	
	//search by team name to get pin
	@GET
	@Path("/teamName/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getByTeamName(@PathParam("name") String teamName) {
		List<Team> list = teamRepository.getTeamName(teamName);
		if (list.size() == 0) {
			return Response.status(Status.NOT_FOUND).build();
		}
		return Response.ok(list).build();	
	}
	
	@POST
	@Consumes({ "application/json" })
	@Produces(MediaType.TEXT_PLAIN)
	@Path("/team")
	public Response addTeam(Team teamRS, @Context UriInfo uriInfo) {
		teamRS = teamRepository.create(teamRS);
		URI createdURI = uriInfo.getBaseUriBuilder().path("" + teamRS.getId()).build();
		System.out.println(createdURI);
		return Response.ok(createdURI.toString()).status(Status.CREATED).build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes({ "application/json" })
	@Path("/team/{id}")
	public Response updateTeam(Team team, @PathParam("id") int id) {
		if (teamRepository.read(id).equals(null)) {
			return Response.status(Status.NOT_FOUND).build();
		}
		Team teamRS2 = teamRepository.update(id, team);
		return Response.ok(teamRS2).build();
	}
	
	@DELETE
	@Path("/team/{id}")
	public Response deleteTeam(@PathParam("id") int id) {
		if (teamRepository.read(id).equals(null)) {
			return Response.status(Status.NOT_FOUND).build();
		}
		teamRepository.delete(id);
		return Response.noContent().build();
	}
	
	
}
