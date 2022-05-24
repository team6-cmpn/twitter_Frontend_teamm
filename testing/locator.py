from selenium.webdriver.common.by import By

class MainPageLocators(object):
    """A class for main page locators. All main page locators should come here"""

    SignUpGoogle = (By.CLASS_NAME, 'button')
    SignUpPhoneOrMail = (By.CSS_SELECTOR, '#root > div > div > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > a')
    SignIn = (By.CSS_SELECTOR, '#root > div > div > div:nth-child(2) > div:nth-child(5) > div:nth-child(5) > a')

class SignUpWithGooglePageLocators(object):

    "This class is for the sign in with google page"
    EnterEmail = (By.CSS_SELECTOR, '#identifierId')
    NextButton = (By.CSS_SELECTOR,'#identifierNext > div > button' )


class SignUpPhoneOrMailPageLocators(object):
    Name = (By.ID, "name")
    Username = (By.ID, "username")
    Email = (By.ID, "email")
    Password = (By.ID, "password")
    Date = (By.ID, "date2")
    Next1 = (By.ID, "button")
    Next2 = (By.ID, "nextButton3")
    SignUp = (By.ID, 'signUpButton')
    Next3 = (By.CSS_SELECTOR, 'body > div:nth-child(15) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.ant-btn-round.ant-btn-primary.ant-btn-lg')


class SignInPageLocators(object):
    EmailOrUsername = (By.ID, "emailOrUserName ")
    Next = (By.ID, "nexttButton")
    #ForgetPassword = (By., "")
    #SignUp = (By., "")
    SignInGoogle = (By.ID, "googleButton")
    Password = (By.ID, "password")
    ForgetPassword_2 = (By.ID, "forgetPassRedirect")
    LogIn = (By.ID, "nextButton")
    FindYourTwitterAccount_Username = (By.ID, 'forgetPassUserName')
    FindYourTwitterAccount_Email = (By.ID, 'forgetPassEmail')
    Search = (By.ID, 'passSearchButton')
    Next_2 = (By.CSS_SELECTOR, 'body > div:nth-child(9) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.ant-btn-round.ant-btn-primary.ant-btn-lg')


class MainPage2Locators(object):
    SearchBar = (By.ID, "searchbar")
    Home = (By.CSS_SELECTOR, "#root > div > div > div.sidebar > ul > li:nth-child(2) > a")
    Explore = (By.CSS_SELECTOR, "#root > div > div > div.sidebar > ul > li:nth-child(3) > a")
    Notifications = (By.CSS_SELECTOR, "#root > div > div > div.sidebar > ul > li:nth-child(4) > a")
    Bookmarks = (By.CSS_SELECTOR, "#root > div > div > div.sidebar > ul > li:nth-child(5) > a")
    Profile = (By.CSS_SELECTOR, "#root > div > div > div.sidebar > ul > li:nth-child(6) > a")
    Settings = (By.CSS_SELECTOR, "#root > div > div > div.sidebar > ul > li:nth-child(7) > a")
    Tweet = (By.ID,"tweet" )
    Username = (By.CSS_SELECTOR, "#root > div > div > div.sidebar > ul > li:nth-child(9) > a")
    Admin = (By.CSS_SELECTOR, "#root > div > div > div.sidebar > ul > li:nth-child(10) > a")
    Username_buttons = (By.ID, "moreLogOut")
    Logout = (By.CSS_SELECTOR, "body > div:nth-child(4) > div > div > div > div.ant-popover-inner > div.ant-popover-inner-content > div > a")
    Logout2 = (By.ID, "logOutButton")
    WhoToFollow = (By.CSS_SELECTOR, "#root > div > div > div.hide_tr > div:nth-child(2) > div.keywor > div > div:nth-child(3) > div.friendFollowButton > button")
    Unfollow = (By.CLASS_NAME, "followButton")

class HomePageLocators(object):
    TweetBar = (By.ID, "tweet text area")
    TweetImage = (By.ID, "button choose image")
    TweetEmoji = (By.ID, "button choose emojis")
    TweetButton = (By.ID, "post tweet button")

class ExplorePageLocators(object):
    SearchBar = (By.ID,"search")
    SearchButton = (By.ID, "searchbutton")

class NotificationsPageLocators(object):
    AllButton = (By.CSS_SELECTOR, "#AllButton\ ")
    MentionButton = (By.ID, "MentionsButton")

class ProfilePageLocators(object):
    EditProfile = (By.ID, "editButton")
    Followers = (By.ID, "followers")
    Following = (By.ID, "following")
    FollowersFollowing = (By.ID, "FollowingTab")
    Tweets = (By.ID, "tweets")
    TweetsReplies = (By.ID, "tweets&replies")
    Meida = (By.ID, "Media")
    Likes = (By.ID, "likes")

class EditProfilePageLocators(object):
    Name = (By.ID, "name")
    Bio = (By.ID, "Bio")
    Location = (By.ID, "Location")
    Website = (By.ID, "Website")
    Date = (By.ID, "date")
    Save = (By.CLASS_NAME, "ButtonSave")

class AdminPageLocators(object):
    AdminHome = (By.ID, "AdminHomePage")
    Statistics = (By.CSS_SELECTOR, "#ADminStatistics > a")
    Users = (By.CSS_SELECTOR, "#AdminUsers > a")
    Block = (By.CLASS_NAME, "viewButton")
    NumberOfDays = (By.CSS_SELECTOR, "#FinalUsersPage > div.admincontainer > div.BlockForm_Widget > div > div > header > form > input[type=number]")
    Submit = (By.ID, "SubmitBlocking")
    

class SettingsPageLocators(object):
    YourAccount = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsMenu > a:nth-child(3)")
    Account_Information = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > a:nth-child(3)")
    Username = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.submenu_discription > a:nth-child(2)")
    Change_Username = (By.ID, "usernameChange")
    SaveName = (By.CSS_SELECTOR, "#form12 > div.savebutton")
    Phone = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.submenu_discription > a:nth-child(3)")
    Change_Phone = (By.ID, "change_phone_number")
    SaveNumber = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.savebutton")
    Email = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.submenu_discription > a:nth-child(4)")
    Change_Email = (By.ID, "change_Email")
    SaveMail = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.savebutton")
    Change_Password = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > a:nth-child(4)")
    Password = (By.ID, "Enterpassword")
    NewPassword = (By.ID, "Newpassword")
    Confirm_Password = (By.ID, "Confirmpassword")
    SavePassword = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.savebutton")
    Deactivate = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > a:nth-child(5)")
    Deactivate_Button = (By.ID, "deactivate_button")
    Privacy_And_Safety = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsMenu > a:nth-child(4)")
    Mute_And_Block = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.submenu_discription > a")
    Blocked_Account = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.submenu_discription > a:nth-child(3)")
    Muted_Accounts = (By.CSS_SELECTOR, "#root > div > div > div.homeBox > div.settingsSubMenu > div.submenu_discription > a:nth-child(4)")

class TweetPageLocators(object):
    TweetBar = (By.ID, "tweet text area")
    MentionsBar = (By.ID, "mentions text area")
    TweetButton = (By.CSS_SELECTOR, "#post\ tweet\ button > span")
    
    pass