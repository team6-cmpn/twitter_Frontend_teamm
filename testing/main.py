import unittest
import page
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType
from selenium.webdriver.chrome.options import Options
import time



L= "http://localhost:3000/"
D= "http://www.twi-jay.xyz/"

class TwitterHomePage(unittest.TestCase):
    """A sample test class to show how page object works"""

    def setUp(self):
        chrome_service = Service(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install())
        # chrome_options = Options()
        # options = [
        #     "--headless",
        #     "--disable-gpu",
        #     "--window-size=1920,1200",
        #     "--ignore-certificate-errors",
        #     "--disable-extensions",
        #     "--no-sandbox",
        #     "--disable-dev-shm-usage" ]
        # for option in options:
        #     chrome_options.add_argument(option)

        self.driver = webdriver.Chrome(service=chrome_service)
        # s = Service('chromedriver')
        # self.driver = webdriver.Chrome(service=s)
        #self.driver = webdriver.Chrome("C:\Program Files (x86)\chromedriver.exe")
        
        #s = Service('C:\Program Files (x86)/msedgedriver.exe')
        #self.driver = webdriver.Edge(service=s)

        self.driver.get("http://www.twi-jay.xyz/")
        self.driver.maximize_window()
        
    


    def test_HomePage_Tweet(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////
        
        #self.driver.get("http://www.twi-jay.xyz/home")
        Main_Page = page.MainPage2(self.driver)
        Main_Page.click_Home()
        home_page = page.HomePage(self.driver)
        home_page.enter_Tweet("testing testing")
        self.assertFalse(home_page.click_Tweet())
        time.sleep(1)
        
        

    def test_ExploreSearch(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        #self.driver.get("http://www.twi-jay.xyz/home")
        Main_Page = page.MainPage2(self.driver)
        Main_Page.click_Explore()
        explore_page = page.ExplorePage(self.driver)
        self.assertFalse(explore_page.enter_Search("hELLO WorLD"))
        #self.assertFalse(explore_page.click_SearchButton())

    def test_Notifications(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        #self.driver.get("http://localhost:3000/home")
        Main_Page = page.MainPage2(self.driver)
        self.assertFalse(Main_Page.click_Notifications())
        #notifications_page = page.NotificationsPage(self.driver)
        #notifications_page.click_All()
        #self.driver.implicitly_wait(100)
        #notifications_page.click_Mentions()
        
    def test_ProfileEdit(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        #self.driver.get("http://www.twi-jay.xyz/home")
        Main_Page = page.MainPage2(self.driver)
        Main_Page.click_Profile()
        profile_page = page.ProfilePage(self.driver)
        profile_page.click_EditProfile()
        Edit_Page = page.EditProfilePage(self.driver)
        Edit_Page.enter_Name("Mohamed")
        Edit_Page.enter_Bio("Hello")
        Edit_Page.enter_Location("London")
        Edit_Page.enter_Website("Arsenal.com")
        Edit_Page.enter_Date("2022-04-06")
        self.assertFalse(Edit_Page.click_Save())
        

    def test_ProfileFollow(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        #self.driver.get("http://www.twi-jay.xyz/home")
        Main_Page = page.MainPage2(self.driver)
        Main_Page.click_Profile()
        profile_page = page.ProfilePage(self.driver)
        profile_page.click_Followers()
        self.driver.get("http://www.twi-jay.xyz/Profile")
        self.assertFalse(profile_page.click_Following())
        


    def test_Admin(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@Mahmoud")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("123456Fa@")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        mainpage2= page.MainPage2(self.driver)
        mainpage2.click_Admin()
        #self.driver.get("http://www.twi-jay.xyz/adminpage")
        admin_page = page.AdminPage(self.driver)
        admin_page.click_Home()
        self.driver.implicitly_wait(100)
        admin_page.click_Statistics()
        self.driver.implicitly_wait(100)
        admin_page.click_Users()
        self.driver.get("http://www.twi-jay.xyz/BlockForm")
        admin_page.enter_Days("2")
        time.sleep(1)
        self.assertFalse(admin_page.click_Submit())
        #admin_page.click_Block()
       
        
        
    def test_Settings(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        #self.driver.get("http://www.twi-jay.xyz/home")
        Main_page = page.MainPage2(self.driver)
        Main_page.click_Settings()
        self.driver.implicitly_wait(100) 
        Settings_Page = page.Settings(self.driver)
        #Settings_Page.click_YourAccount()
        self.driver.get("http://www.twi-jay.xyz/Settings/your-account")
        #Settings_Page.click_AccountInformation()
        self.driver.get("http://www.twi-jay.xyz/Settings/Your-twitter-data")
        #Settings_Page.click_Username()
        self.driver.get("http://www.twi-jay.xyz/Settings/change-username")
        Settings_Page.enter_Username("@omargabr")
        self.driver.implicitly_wait(100)
        Settings_Page.click_SaveUsername()

        #Settings_Page.click_YourAccount()
        self.driver.get("http://www.twi-jay.xyz/Settings/your-account")
        #Settings_Page.click_AccountInformation()
        self.driver.get("http://www.twi-jay.xyz/Settings/Your-twitter-data")
        #Settings_Page.click_Phone()
        self.driver.get("http://www.twi-jay.xyz/Settings/change-phone-number")
        Settings_Page.enter_Phone("+201061524100")
        self.driver.implicitly_wait(100)
        Settings_Page.click_SaveNumber()

        #Settings_Page.click_YourAccount()
        self.driver.get("http://www.twi-jay.xyz/Settings/your-account")
        #Settings_Page.click_AccountInformation()
        self.driver.get("http://www.twi-jay.xyz/Settings/Your-twitter-data")
        #Settings_Page.click_Email()
        self.driver.get("http://www.twi-jay.xyz/Settings/change-email")
        Settings_Page.enter_Email("mohamed.k.elrafie@gmail.com")
        self.driver.implicitly_wait(100)
        Settings_Page.click_SaveMail()
        
        #Settings_Page.click_YourAccount()
        self.driver.get("http://www.twi-jay.xyz/Settings/your-account")
        #Settings_Page.click_ChangePassword()
        self.driver.get("http://www.twi-jay.xyz/Settings/change-password")
        Settings_Page.enter_Password("Egyptionnn123_!")
        Settings_Page.enter_NewPassword("Egyptionnn123_!")
        Settings_Page.enter_ConfirmPassword("Egyptionnn123_!")
        Settings_Page.click_SavePassword()

        #Settings_Page.click_PrivacyAndSafety()
        self.driver.get("http://www.twi-jay.xyz/Settings/privacy-and-saftey")
        #Settings_Page.click_MuteAndBlock()
        self.driver.get("http://www.twi-jay.xyz/Settings/MuteandBlock")
        #Settings_Page.click_BlockedAccounts()
        self.driver.get("http://www.twi-jay.xyz/Settings/Blocked-accounts")
        #Settings_Page.click_PrivacyAndSafety()
        self.driver.get("http://www.twi-jay.xyz/Settings/privacy-and-saftey")
        #Settings_Page.click_MuteAndBlock()
        self.driver.get("http://www.twi-jay.xyz/Settings/MuteandBlock")
        #self.assertFalse(Settings_Page.click_MutedAccounts())
        self.assertFalse(self.driver.get("http://www.twi-jay.xyz/Settings/Muted-accounts"))

        #Settings_Page.click_YourAccount()
        #Settings_Page.click_DeactivateYourAccount()
        #self.driver.implicitly_wait(100)
        #self.assertFalse(Settings_Page.click_Deactivate())


    '''def test_Logout(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        #self.driver.get("http://www.twi-jay.xyz/home")
        Main_Page = page.MainPage2(self.driver)
        #Main_Page.click_UsernameButtons()
        Main_Page.click_Logout()
        self.driver.get("http://www.twi-jay.xyz/logout")
        self.assertFalse(Main_Page.click_Logout2())'''
        


    def test_Search(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        #self.driver.get("http://www.twi-jay.xyz/home")
        Main_Page = page.MainPage2(self.driver)
        self.assertFalse(Main_Page.enter_Search("hello"))



    def test_WhoToFollow_Unfollow(self):
        #////////////////////////////////////////////////
        #This part is to sign in kol marra 
        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password("Egyptionnn123_!")
        time.sleep(3)
        (signIn_Page.click_LogIn())
        self.driver.implicitly_wait(100)
        #////////////////////////////////////////////////

        #self.driver.get("http://www.twi-jay.xyz/home")
        Main_Page = page.MainPage2(self.driver)
        Main_Page.click_WhoToFollow()
        self.driver.implicitly_wait(100)
        Main_Page.click_WhoToFollow()
        time.sleep(1)
        self.assertFalse(Main_Page.click_Unfollow())

    
    '''def test_Tweet(self):
        self.driver.get("http://localhost:3000/home")
        Main_Page = page.MainPage2(self.driver)
        Main_Page.click_Tweet()
        Tweet_Page = page.TweetPage(self.driver)
        Tweet_Page.enter_Tweet("Hello World")
        #Tweet_Page.enter_Mentions("@F")
        self.driver.implicitly_wait(100)
        Tweet_Page.click_Tweet()'''


    def test_SignIn(self):
        

        main_page = page.MainPage(self.driver)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        time.sleep(1)
        signIn_Page.enter_EmailOrUsername("omargabr")
        signIn_Page.click_Next()
        signIn_Page.enter_Password('Egyptionnn123_!')
        time.sleep(2)
        self.assertFalse(signIn_Page.click_LogIn())



    def test_SignUpWithGoogle(self):
        

        #Load the main page. In this case the home page of Python.org.
        main_page = page.MainPage(self.driver)
        #Clicks On Sign Up with google button
        (main_page.click_SignUpWithGoogle_Button(),'Button Didnt Press')
        self.driver.get("https://accounts.google.com/o/oauth2/auth/identifier?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A3000%3Fid%3Dauth877532&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=335712697506-0rdelma7j4jgcc6bicuhnn20e2l8m0fm.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A3000&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow")
        #self.driver.implicitly_wait(100)
        Enter_Google_Email_Page = page.EnterGoogleEmailPage(self.driver)
        (Enter_Google_Email_Page.click_EnterEmail("mohamed.k.elrafie@gmail.com"))
        self.assertFalse(Enter_Google_Email_Page.click_Next())

        
       
    def test_SignUpWithPhoneMail(self):
        
        
        #Load the main page. In this case the home page of Python.org.
        main_page = page.MainPage(self.driver)
        #Clicks On Sign Up with google button
        (main_page.click_SignUpWithPhoneOrMail(),'Button Didnt Press')
        signUpPhoneOrMail_Page = page.SignUpPhoneOrMailPage(self.driver)
        signUpPhoneOrMail_Page.enter_Username("@OmarGabr")
        signUpPhoneOrMail_Page.enter_Email("omargabr63@yahoo.com")
        signUpPhoneOrMail_Page.enter_Password("abcdRefg123_")
        signUpPhoneOrMail_Page.enter_Date("2020-03-04")
        signUpPhoneOrMail_Page.enter_Name("Omar Gabr")
        signUpPhoneOrMail_Page.click_Next_1()
        self.driver.implicitly_wait(2000)
        signUpPhoneOrMail_Page.click_Next_2()
        time.sleep(3)
        self.assertFalse(signUpPhoneOrMail_Page.SignUpButton())
        #self.driver.implicitly_wait(100)
        #self.assertFalse(signUpPhoneOrMail_Page.click_Next_3())

    
    def test_SignInGoogle(self):
        
        #Load the main page. In this case the home page of Python.org.
        main_page = page.MainPage(self.driver)
        #Clicks On Sign Up with google button
        time.sleep(2)
        (main_page.click_SignIn(),'Button Didnt Press')
        signIn_Page = page.SignInPage(self.driver)
        self.driver.implicitly_wait(100)
        signIn_Page.click_SignInGoogle()
        self.driver.get("https://accounts.google.com/o/oauth2/auth/identifier?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A3000%3Fid%3Dauth778568&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=335712697506-0rdelma7j4jgcc6bicuhnn20e2l8m0fm.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A3000&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow")
        Enter_Google_Email_Page = page.EnterGoogleEmailPage(self.driver)
        (Enter_Google_Email_Page.click_EnterEmail("mohamed.k.elrafie@gmail.com"))
        self.assertFalse(Enter_Google_Email_Page.click_Next())
        


    def test_SignIn_ForgetPassword2(self):
        main_page = page.MainPage(self.driver)
        #Clicks On Sign Up with google button
        main_page.click_SignIn(),'Button Didnt Press'
        signIn_Page = page.SignInPage(self.driver)
        signIn_Page.enter_EmailOrUsername("@omargabr")
        signIn_Page.click_Next()
        self.driver.implicitly_wait(100)
        signIn_Page.click_ForgetPassword_2()
        self.driver.implicitly_wait(100)
        signIn_Page.enter_Username2("@OmarGabr")
        signIn_Page.enter_Email2("hello.hello@gmail.com")
        self.assertFalse(signIn_Page.click_Search())
        #self.assertFalse(signIn_Page.click_next_2())

    

        
        
        
        
        
        
        
        
        





    def tearDown(self):
        self.driver.close()












if __name__ == "__main__":
    unittest.main()





    










