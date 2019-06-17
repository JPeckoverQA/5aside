package com.qa.seleniumCRUDTests;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

public class CRUDTests {
	
	WebDriver driver;

	Actions action;

	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Johnny\\Desktop\\chromedriver.exe");
		driver = new ChromeDriver();
		action = new Actions(driver);
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
	
	@Test
	public void createPlayerTest() throws InterruptedException {
		driver.get("http://35.246.42.33:8080/5aside-1.0/registerplayer.html");
		RegisterPlayerPage registerPlayerPage = PageFactory.initElements(driver, RegisterPlayerPage.class);
		registerPlayerPage.inputs("test@test.com", "testForename", "testSurname", "testContactNo", "2");
		action.moveToElement(driver.findElement(By.id("registerPlayerButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
		String confirmation = driver.findElement(By.xpath("/html/body/div/div/div[2]/h1")).getText();
		assertEquals("Create player test failed", "Welcome to 5aside!", confirmation);
		
	}
	
	@Test
	public void createTeamTest() throws InterruptedException {
		driver.get("http://35.246.42.33:8080/5aside-1.0/registerteam.html");
		RegisterTeamPage registerTeamPage = PageFactory.initElements(driver, RegisterTeamPage.class);
		registerTeamPage.inputs("Testing Town", "Blue", "White");
		action.moveToElement(driver.findElement(By.id("registerTeamButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
		driver.switchTo().alert().accept();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
		String confirmation = driver.findElement(By.xpath("/html/body/div/div/div[2]/h1")).getText();
		
		assertEquals("Create player test failed", "Welcome to 5aside!", confirmation);
		
	}
	
	@Test
	public void updatePlayerTest() throws InterruptedException {
		driver.get("http://35.246.42.33:8080/5aside-1.0/player.html");
		UpdatePlayerPage updatePlayerPage = PageFactory.initElements(driver, UpdatePlayerPage.class);
		updatePlayerPage.inputs("test@test.com", "testForename", "testSurname", "testContactNo", "2");
		action.moveToElement(driver.findElement(By.id("updatePlayerButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
		String confirmation = driver.findElement(By.id("logOutButton")).getText();
		assertEquals("Create player test failed", "Log Out", confirmation);
	}
	
	@Test
	public void updateTeamTest() throws InterruptedException {
		driver.get("http://35.246.42.33:8080/5aside-1.0/teamprofile.html");
		UpdateTeamPage updateTeamPage = PageFactory.initElements(driver, UpdateTeamPage.class);
		updateTeamPage.inputs("Test Rovers", "Green", "Black");
		action.moveToElement(driver.findElement(By.id("updateTeamButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
		String confirmation = driver.findElement(By.id("logOutButton")).getText();
		assertEquals("Create team test failed", "Log Out", confirmation);
	}
	
	@Test
	public void deletePlayerTest() throws InterruptedException {
		driver.get("http://35.246.42.33:8080/5aside-1.0/player.html");
		UpdatePlayerPage updatePlayerPage = PageFactory.initElements(driver, UpdatePlayerPage.class);
		updatePlayerPage.inputs("test@test.com", "testForename", "testSurname", "testContactNo", "2");
		action.moveToElement(driver.findElement(By.id("deletePlayerButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
		String confirmation = driver.switchTo().alert().getText();
		Thread.sleep(100);
		assertEquals("Create player test failed", "Are you sure you want to delete your account?", confirmation);
	}
	
	@Test
	public void deleteTeamTest() throws InterruptedException {
		driver.get("http://35.246.42.33:8080/5aside-1.0/teamprofile.html");
		UpdateTeamPage updateTeamPage = PageFactory.initElements(driver, UpdateTeamPage.class);
		updateTeamPage.inputs("Test Rovers", "Green", "Black");
		action.moveToElement(driver.findElement(By.id("deleteTeamButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
		String confirmation = driver.switchTo().alert().getText();
		assertEquals("Create team test failed", "Are you sure you want to delete your account?", confirmation);
	}
	
	@Test
	public void logIn() throws InterruptedException {
		//register team button
		driver.get("http://35.246.42.33:8080/5aside-1.0/");
		action.moveToElement(driver.findElement(By.id("registerTeamPageButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		//register team
		RegisterTeamPage registerTeamPage = PageFactory.initElements(driver, RegisterTeamPage.class);
		registerTeamPage.inputs("Test Ham United FC", "Blue", "White");
		action.moveToElement(driver.findElement(By.id("registerTeamButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
		
		
		String teamPinText = driver.switchTo().alert().getText();
		//finds pin from within alert
		String teamPin = teamPinText.substring(18, 20);
		Thread.sleep(100);
		driver.switchTo().alert().accept();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		
		//register player
		action.moveToElement(driver.findElement(By.id("registerPlayerPageButton"))).click().perform();
		RegisterPlayerPage registerPlayerPage = PageFactory.initElements(driver, RegisterPlayerPage.class);
		registerPlayerPage.inputs("testPlayer@test.com", "testForename", "testSurname", "testContactNo", teamPin);
		action.moveToElement(driver.findElement(By.id("registerPlayerButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		Thread.sleep(100);
				
		LandingPage landingPage = PageFactory.initElements(driver, LandingPage.class);
		landingPage.inputs("testPlayer@test.com");
		action.moveToElement(driver.findElement(By.id("loginButton"))).click().perform();
		Thread.sleep(100);
		assertEquals("Login fail", "Hello testForename!", driver.findElement(By.id("userForenameHeader")).getText());
	}
		@Test
		public void logInTeamNameDisplays() throws InterruptedException {
			//register team button
			driver.get("http://35.246.42.33:8080/5aside-1.0/");
			action.moveToElement(driver.findElement(By.id("registerTeamPageButton"))).click().perform();
			driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
			//register team
			RegisterTeamPage registerTeamPage = PageFactory.initElements(driver, RegisterTeamPage.class);
			registerTeamPage.inputs("Test Ham United FC", "Blue", "White");
			action.moveToElement(driver.findElement(By.id("registerTeamButton"))).click().perform();
			driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
			Thread.sleep(100);
			
			
			String teamPinText = driver.switchTo().alert().getText();
			//finds pin from within alert
			String teamPin = teamPinText.substring(18, 20);
			Thread.sleep(100);
			driver.switchTo().alert().accept();
			driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
			
			//register player
			action.moveToElement(driver.findElement(By.id("registerPlayerPageButton"))).click().perform();
			RegisterPlayerPage registerPlayerPage = PageFactory.initElements(driver, RegisterPlayerPage.class);
			registerPlayerPage.inputs("testPlayer@test.com", "testForename", "testSurname", "testContactNo", teamPin);
			action.moveToElement(driver.findElement(By.id("registerPlayerButton"))).click().perform();
			driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
			Thread.sleep(100);
					
			LandingPage landingPage = PageFactory.initElements(driver, LandingPage.class);
			landingPage.inputs("testPlayer@test.com");
			action.moveToElement(driver.findElement(By.id("loginButton"))).click().perform();
			Thread.sleep(100);
			assertEquals("Login team name displays fail", "Test Ham United FC", driver.findElement(By.id("userTeamNameHeader")).getText());
				
	}
		@Test
		public void currentPlayerDetailsDisplayedBeforeUpdate() throws InterruptedException {
			//register team button
			driver.get("http://35.246.42.33:8080/5aside-1.0/");
			action.moveToElement(driver.findElement(By.id("registerTeamPageButton"))).click().perform();
			driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
			//register team
			RegisterTeamPage registerTeamPage = PageFactory.initElements(driver, RegisterTeamPage.class);
			registerTeamPage.inputs("Test Ham United FC", "Blue", "White");
			action.moveToElement(driver.findElement(By.id("registerTeamButton"))).click().perform();
			driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
			Thread.sleep(100);
			
			
			String teamPinText = driver.switchTo().alert().getText();
			//finds pin from within alert
			String teamPin = teamPinText.substring(18, 20);
			Thread.sleep(100);
			driver.switchTo().alert().accept();
			driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
			
			//register player
			action.moveToElement(driver.findElement(By.id("registerPlayerPageButton"))).click().perform();
			RegisterPlayerPage registerPlayerPage = PageFactory.initElements(driver, RegisterPlayerPage.class);
			registerPlayerPage.inputs("testPlayer@test.com", "testForename", "testSurname", "testContactNo", teamPin);
			action.moveToElement(driver.findElement(By.id("registerPlayerButton"))).click().perform();
			driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
			Thread.sleep(100);
					
			LandingPage landingPage = PageFactory.initElements(driver, LandingPage.class);
			landingPage.inputs("testPlayer@test.com");
			action.moveToElement(driver.findElement(By.id("loginButton"))).click().perform();
			Thread.sleep(100);
			action.moveToElement(driver.findElement(By.id("updatePlayerDetailsButton"))).click().perform();
			Thread.sleep(100);
			String currentForename = driver.findElement(By.id("forenameUpdate")).getText();
			assertEquals("current player details displayed before update test fail", "testForename", currentForename);
			
			
	
	
}
}
	
	


	
	

