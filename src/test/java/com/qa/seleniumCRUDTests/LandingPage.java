package com.qa.seleniumCRUDTests;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LandingPage {
	@FindBy(id = "emailLogin")
	private WebElement emailLogin;

	public void inputs(String emailLoginInput) {
		emailLogin.sendKeys(emailLoginInput);
	}
}
