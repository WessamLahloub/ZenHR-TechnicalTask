//login.spec.js (Test Scripts in JS)

import LoginPage from '../pageObjects/LoginPage';
import EmployeesDirectoryPage from '../pageObjects/EmployeesDirectoryPage';
import SideMenuLinksPage from '../pageObjects/SideMenuLinksPage';
import LogoutPage from '../pageObjects/LogoutPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught Exception:', err.message);
  return false;
});

describe('End-to-End Test, Main File', () => {
  const loginPage = LoginPage;
  const employeesDirectoryPage = EmployeesDirectoryPage;
  const sideMenuLinksPage = SideMenuLinksPage;
  const logoutPage = LogoutPage;

  it('should perform end-to-end test', () => {

   /*Given('I visit the ZenHR application', () => {
  loginPage.visit();
});*/
/*When('I navigate to the sign-in page', () => {
  loginPage.navigateToSignIn();
});*/
/*When('I log in with username {string} and password {string}', (username, password) => {
  loginPage.login(tillawy@hotmail.com, password);
});
*/
/*Then('I should see the dashboard', () => {
  loginPage.assertLoginSuccess();
});*/
    loginPage.visit().navigateToSignIn().login('tillawy@hotmail.com', 'password').assertLoginSuccess();
    
 /*When('I open the Employees Directory and click the "B" button', () => {
  employeesDirectoryPage.open().clickButton();
});*/
/*Then('I should see more than two entries', () => {
  employeesDirectoryPage.assertEntriesCountGreaterThanTwo();
});*/
    employeesDirectoryPage.open().clickButton().assertEntriesCountGreaterThanTwo();

/*When('I open the side menu', () => {
  sideMenuLinksPage.open();
});*/
/*Then('all links in the side menu should be functional', () => {
  sideMenuLinksPage.assertLinksFunctional();
});*/
    sideMenuLinksPage.open().assertLinksFunctional();

  /*When('I open the top-right dropdown menu and log out', () => {
  logoutPage.openDropdown().logout();
});*/
/*Then('I should see the logout success page', () => {
  logoutPage.assertLogoutSuccess();
});*/
    logoutPage.openDropdown().logout().assertLogoutSuccess();
  });
});