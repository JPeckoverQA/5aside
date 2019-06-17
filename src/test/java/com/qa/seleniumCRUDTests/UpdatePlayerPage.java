package com.qa.seleniumCRUDTests;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class UpdatePlayerPage {
	@FindBy(id = "forenameUpdate")
	private WebElement forename;

	@FindBy(id = "surnameUpdate")
	private WebElement surname;
	
	@FindBy(id = "emailUpdate")
	private WebElement email;
	
	@FindBy(id = "contactNoUpdate")
	private WebElement contactNo;

	@FindBy(id = "teamPinUpdate")
	private WebElement teamPin;
	
	@FindBy(id = "updatePlayerButton")
	private WebElement updatePlayerButton;
	
	@FindBy(id = "deletePlayerButton")
	private WebElement deletePlayerButton;
	
	
	
	public void inputs(String inputEmail, String inputForename, String inputSurname, String inputContactNo,
			String inputTeamPin) {
		email.sendKeys(inputEmail);
		forename.sendKeys(inputForename);
		surname.sendKeys(inputSurname);
		contactNo.sendKeys(inputContactNo);
		teamPin.sendKeys(inputTeamPin);
	
	}
//update confirmation is it takes you to team page
}
