package seleniumNavigation;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class NavigationTesting {

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
	public void registerPlayerButton() {
		driver.get("http://35.246.42.33:8080/5aside-1.0/");
		action.moveToElement(driver.findElement(By.id("registerPlayerPageButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		String url = driver.getCurrentUrl();
		assertEquals("Change page failed", "http://35.246.42.33:8080/5aside-1.0/registerplayer.html", url);
	}
	
	@Test
	public void registerTeamButton() {
		driver.get("http://35.246.42.33:8080/5aside-1.0/");
		action.moveToElement(driver.findElement(By.id("registerTeamPageButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		String url = driver.getCurrentUrl();
		assertEquals("Change page failed", "http://35.246.42.33:8080/5aside-1.0/registerteam.html", url);
	}
	
	@Test
	public void logOutTeamButton() {
		driver.get("http://35.246.42.33:8080/5aside-1.0/team.html");
		action.moveToElement(driver.findElement(By.id("logOutButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		String url = driver.getCurrentUrl();
		assertEquals("Change page failed", "http://35.246.42.33:8080/5aside-1.0/", url);
	}
	@Test
	public void logOutPlayerButton() {
		driver.get("http://35.246.42.33:8080/5aside-1.0/player.html");
		action.moveToElement(driver.findElement(By.id("logOutButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		String url = driver.getCurrentUrl();
		assertEquals("Change page failed", "http://35.246.42.33:8080/5aside-1.0/", url);
	}
	@Test
	public void logOutTeamProfileButton() {
		driver.get("http://35.246.42.33:8080/5aside-1.0/teamprofile.html");
		action.moveToElement(driver.findElement(By.id("logOutButton"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
		String url = driver.getCurrentUrl();
		assertEquals("Change page failed", "http://35.246.42.33:8080/5aside-1.0/", url);
	}
	
	
	
}
