package com.qa.seleniumCRUDTests;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterTeamPage {
	@FindBy(id = "teamNameRegister")
	private WebElement teamName;

	@FindBy(id = "homeKitColourRegister")
	private WebElement homeColour;

	@FindBy(id = "awayKitColourRegister")
	private WebElement awayColour;

	public void inputs(String inputTeamName, String inputHomeColour, String inputAwayColour) {
		teamName.sendKeys(inputTeamName);
		homeColour.sendKeys(inputHomeColour);
		awayColour.sendKeys(inputAwayColour);
	}
}