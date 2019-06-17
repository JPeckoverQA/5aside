package com.qa.seleniumCRUDTests;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class UpdateTeamPage {
	@FindBy(id = "teamNameUpdate")
	private WebElement teamName;

	@FindBy(id = "homeColourUpdate")
	private WebElement homeColour;

	@FindBy(id = "awayColourUpdate")
	private WebElement awayColour;
	
	@FindBy(id = "updatePlayerButton")
	private WebElement updateTeamButton;
	
	@FindBy(id = "deletePlayerButton")
	private WebElement deleteTeamButton;

	public void inputs(String inputTeamName, String inputHomeColour, String inputAwayColour) {
		teamName.sendKeys(inputTeamName);
		homeColour.sendKeys(inputHomeColour);
		awayColour.sendKeys(inputAwayColour);
	}

}
