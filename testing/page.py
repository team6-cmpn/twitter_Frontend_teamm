#from element import BasePageElement
from locator import MainPageLocators, SettingsPageLocators
from locator import SignUpWithGooglePageLocators
from locator import SignUpPhoneOrMailPageLocators
from locator import SignInPageLocators 
from locator import MainPage2Locators
from locator import HomePageLocators
from locator import ExplorePageLocators 
from locator import NotificationsPageLocators
from locator import ProfilePageLocators
from locator import EditProfilePageLocators
from locator import AdminPageLocators
from locator import SettingsPageLocators
from locator import TweetPageLocators
from selenium.webdriver.common.keys import Keys




class BasePage(object):
    """Base class to initialize the base page that will be called from all
    pages"""

    def __init__(self, driver):
        self.driver = driver


#class TypeGoogleEmail(BasePageElement):
    #locator = "identifier"


class MainPage(BasePage):
    """Home page action methods come here. I.e. Python.org"""

    def click_SignUpWithGoogle_Button(self):
        """Triggers the search"""

        element = self.driver.find_element(*MainPageLocators.SignUpGoogle)
        element.click()

    def click_SignUpWithPhoneOrMail(self):
        """Triggers the search"""

        element = self.driver.find_element(*MainPageLocators.SignUpPhoneOrMail)
        element.click()

    def click_SignIn(self):
        """Triggers the search"""

        element = self.driver.find_element(*MainPageLocators.SignIn)
        element.click()


class EnterGoogleEmailPage(BasePage):

    def click_EnterEmail(self, str):

        element = self.driver.find_element(*SignUpWithGooglePageLocators.EnterEmail)
        element.send_keys(str)

    def click_Next(self):
        element= self.driver.find_element(*SignUpWithGooglePageLocators.NextButton) 
        element.click()   



class SignUpPhoneOrMailPage(BasePage):

    def enter_Name(self, str):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.Name)
        element.send_keys(str)
    
    def enter_Username(self, str):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.Username)
        element.send_keys(str)

    def enter_Email(self, str):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.Email)
        element.send_keys(str)

    def enter_Password(self, str):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.Password)
        element.send_keys(str)

    def enter_Date(self, str):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.Date)
        element.send_keys(str)
    
    def click_Next_1(self):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.Next1)
        element.click()

    def click_Next_2(self):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.Next2)
        element.click()

    def SignUpButton(self):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.SignUp)
        element.click()

    def click_Next_3(self):
        element = self.driver.find_element(*SignUpPhoneOrMailPageLocators.Next3)
        element.click()


class SignInPage(BasePage):
    def enter_EmailOrUsername(self, str):
        element = self.driver.find_element(*SignInPageLocators.EmailOrUsername)
        element.send_keys(str)

    def click_Next(self):
        element = self.driver.find_element(*SignInPageLocators.Next)
        element.click()

    def click_ForgetPassword(self):
        element = self.driver.find_element(*SignInPageLocators.ForgetPassword)
        element.click()

    def click_SignUp(self):
        element = self.driver.find_element(*SignInPageLocators.SignUp)
        element.click()
    
    def click_SignInGoogle(self):
        element = self.driver.find_element(*SignInPageLocators.SignInGoogle)
        element.click()
    
    def enter_Password(self, str):
        element = self.driver.find_element(*SignInPageLocators.Password)
        element.send_keys(str)

    def click_ForgetPassword_2(self):
        element = self.driver.find_element(*SignInPageLocators.ForgetPassword_2)
        self.driver.implicitly_wait(100)
        element.click()

    def click_LogIn(self):
        element = self.driver.find_element(*SignInPageLocators.LogIn)
        element.click()

    def enter_Username2(self,str):
        element = self.driver.find_element(*SignInPageLocators.FindYourTwitterAccount_Username)
        element.send_keys(str)

    def enter_Email2(self,str):
        element = self.driver.find_element(*SignInPageLocators.FindYourTwitterAccount_Email)
        element.send_keys(str)

    def click_Search(self):
        element = self.driver.find_element(*SignInPageLocators.Search)
        element.click()

    def click_next_2(self):
        element = self.driver.find_element(*SignInPageLocators.Next_2)
        element.click()


class MainPage2(BasePage):
    def click_Home(self):
        element = self.driver.find_element(*MainPage2Locators.Home)
        element.click()
    
    def click_Explore(self):
        element = self.driver.find_element(*MainPage2Locators.Explore)
        element.click()

    def click_Notifications(self):
        element = self.driver.find_element(*MainPage2Locators.Notifications)
        element.click()

    def click_Bookmarks(self):
        element = self.driver.find_element(*MainPage2Locators.Bookmarks)
        element.click()

    def click_Profile(self):
        element = self.driver.find_element(*MainPage2Locators.Profile)
        element.click()

    def click_Settings(self):
        element = self.driver.find_element(*MainPage2Locators.Settings)
        element.click()

    def click_Tweet(self):
        element = self.driver.find_element(*MainPage2Locators.Tweet)
        element.click()

    def click_Username(self):
        element = self.driver.find_element(*MainPage2Locators.Username)
        element.click()

    def click_Admin(self):
        element = self.driver.find_element(*MainPage2Locators.Admin)
        element.click()

    def click_UsernameButtons(self):
        element = self.driver.find_element(*MainPage2Locators.Username_buttons)
        element.click()

    def click_Logout(self):
        element = self.driver.find_element(*MainPage2Locators.Logout)
        element.click()

    def click_Logout2(self):
        element = self.driver.find_element(*MainPage2Locators.Logout2)
        element.click()

    def click_WhoToFollow(self):
        element = self.driver.find_element(*MainPage2Locators.WhoToFollow)
        element.click()

    def click_Unfollow(self):
        element = self.driver.find_element(*MainPage2Locators.Unfollow)
        element.click()

    def enter_Search(self, str):
        element = self.driver.find_element(*MainPage2Locators.SearchBar)
        element.send_keys(str)
        self.driver.implicitly_wait(100)
        element.send_keys(Keys.ENTER)


class HomePage(BasePage):
    def enter_Tweet(self, str):
        element = self.driver.find_element(*HomePageLocators.TweetBar)
        element.send_keys(str)

    def click_Tweet(self):
        element = self.driver.find_element(*HomePageLocators.TweetButton)
        element.click()

class ExplorePage(BasePage):
    def enter_Search(self, str):
        element = self.driver.find_element(*ExplorePageLocators.SearchBar)
        element.send_keys(str)
    
    def click_SearchButton(self):
        element = self.driver.find_element(*ExplorePageLocators.SearchButton)
        element.click()

class NotificationsPage(BasePage):
    def click_All(self):
        element = self.driver.find_element(*NotificationsPageLocators.AllButton)
        element.click()

    def click_Mentions(self):
        element = self.driver.find_element(*NotificationsPageLocators.MentionButton)
        element.click()

class ProfilePage(BasePage):
    def click_EditProfile(self):
        element = self.driver.find_element(*ProfilePageLocators.EditProfile)
        element.click()
    
    def click_Followers(self):
        element = self.driver.find_element(*ProfilePageLocators.Followers)
        element.click()

    def click_Following(self):
        element = self.driver.find_element(*ProfilePageLocators.Following)
        element.click()

    def click_FollowersFollowing(self):
        element = self.driver.find_element(*ProfilePageLocators.FollowersFollowing)
        element.click()

    def click_Tweets(self):
        element = self.driver.find_element(*ProfilePageLocators.Tweets)
        element.click()

    def click_TweetsReplies(self):
        element = self.driver.find_element(*ProfilePageLocators.TweetsReplies)
        element.click()

    def click_Media(self):
        element = self.driver.find_element(*ProfilePageLocators.Meida)
        element.click()

    def click_Likes(self):
        element = self.driver.find_element(*ProfilePageLocators.Likes)
        element.click()

class EditProfilePage(BasePage):
    def enter_Name(self,str):
        element = self.driver.find_element(*EditProfilePageLocators.Name)
        element.send_keys(str)
    
    def enter_Bio(self,str):
        element = self.driver.find_element(*EditProfilePageLocators.Bio)
        element.send_keys(str)

    def enter_Location(self,str):
        element = self.driver.find_element(*EditProfilePageLocators.Location)
        element.send_keys(str)

    def enter_Website(self,str):
        element = self.driver.find_element(*EditProfilePageLocators.Website)
        element.send_keys(str)

    def enter_Date(self,str):
        element = self.driver.find_element(*EditProfilePageLocators.Save)
        element.send_keys(str)

    def click_Save(self):
        element = self.driver.find_element(*EditProfilePageLocators.Save)
        element.click()

class AdminPage(BasePage):
    def click_Home(self):
        element = self.driver.find_element(*AdminPageLocators.AdminHome)
        element.click()

    def click_Statistics(self):
        element = self.driver.find_element(*AdminPageLocators.Statistics)
        element.click()

    def click_Users(self):
        element = self.driver.find_element(*AdminPageLocators.Users)
        element.click()
    
    def click_Block(self):
        element = self.driver.find_element(*AdminPageLocators.Block)
        element.click()

    def enter_Days(self,str):
        element = self.driver.find_element(*AdminPageLocators.NumberOfDays)
        element.send_keys(str)

    def click_Submit(self):
        element = self.driver.find_element(*AdminPageLocators.Submit)
        element.click()

class Settings(BasePage):
    def click_YourAccount(self):
        element = self.driver.find_element(*SettingsPageLocators.YourAccount)
        element.click()
    
    def click_AccountInformation(self):
        element = self.driver.find_element(*SettingsPageLocators.Account_Information)
        element.click()

    def click_Username(self):
        element = self.driver.find_element(*SettingsPageLocators.Username)
        element.click()

    def enter_Username(self,str):
        element = self.driver.find_element(*SettingsPageLocators.Change_Username)
        element.send_keys(str)

    def click_SaveUsername(self):
        element = self.driver.find_element(*SettingsPageLocators.SaveName)
        element.click()

    def click_Phone(self):
        element = self.driver.find_element(*SettingsPageLocators.Phone)
        element.click()

    def enter_Phone(self,str):
        element = self.driver.find_element(*SettingsPageLocators.Change_Phone)
        element.send_keys(str)

    def click_SaveNumber(self):
        element = self.driver.find_element(*SettingsPageLocators.SaveNumber)
        element.click()

    def click_Email(self):
        element = self.driver.find_element(*SettingsPageLocators.Email)
        element.click()

    def enter_Email(self,str):
        element = self.driver.find_element(*SettingsPageLocators.Change_Email)
        element.send_keys(str)

    def click_SaveMail(self):
        element = self.driver.find_element(*SettingsPageLocators.SaveMail)
        element.click()

    def click_ChangePassword(self):
        element = self.driver.find_element(*SettingsPageLocators.Change_Password)
        element.click()

    def enter_Password(self,str):
        element = self.driver.find_element(*SettingsPageLocators.Password)
        element.send_keys(str)

    def enter_NewPassword(self,str):
        element = self.driver.find_element(*SettingsPageLocators.NewPassword)
        element.send_keys(str)

    def enter_ConfirmPassword(self,str):
        element = self.driver.find_element(*SettingsPageLocators.Confirm_Password)
        element.send_keys(str)

    def click_SavePassword(self):
        element = self.driver.find_element(*SettingsPageLocators.SavePassword)
        element.click()

    def click_PrivacyAndSafety(self):
        element = self.driver.find_element(*SettingsPageLocators.Privacy_And_Safety)
        element.click()

    def click_MuteAndBlock(self):
        element = self.driver.find_element(*SettingsPageLocators.Mute_And_Block)
        element.click()

    def click_BlockedAccounts(self):
        element = self.driver.find_element(*SettingsPageLocators.Blocked_Account)
        element.click()

    def click_MutedAccounts(self):
        element = self.driver.find_element(*SettingsPageLocators.Muted_Accounts)
        element.click()

    def click_DeactivateYourAccount(self):
        element = self.driver.find_element(*SettingsPageLocators.Deactivate)
        element.click()

    def click_Deactivate(self):
        element = self.driver.find_element(*SettingsPageLocators.Deactivate_Button)
        element.click()

class TweetPage(BasePage):
    def enter_Tweet(self, str):
        element = self.driver.find_element(*TweetPageLocators.TweetBar)
        element.send_keys(str)

    def enter_Mentions(self, str):
        element = self.driver.find_element(*TweetPageLocators.MentionsBar)
        element.send_keys(str)

    def click_Tweet(self):
        element = self.driver.find_element(*TweetPageLocators.TweetButton)
        element.click()
        