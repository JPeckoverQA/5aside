package com.qa.seleniumCRUDTests;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterPlayerPage {
	@FindBy(id = "emailRegister")
	private WebElement email;

	@FindBy(id = "forenameRegister")
	private WebElement forename;

	@FindBy(id = "surnameRegister")
	private WebElement surname;

	@FindBy(id = "contactNoRegister")
	private WebElement contactNo;

	@FindBy(id = "teamPinRegister")
	private WebElement teamPin;

	public void inputs(String inputEmail, String inputForename, String inputSurname, String inputContactNo,
			String inputTeamPin) {
		email.sendKeys(inputEmail);
		forename.sendKeys(inputForename);
		surname.sendKeys(inputSurname);
		contactNo.sendKeys(inputContactNo);
		teamPin.sendKeys(inputTeamPin);
	}
}
