// cypress/e2e/LoginPage.js (POM)

class LoginPage {
      visit() {
        cy.visit('https://zenhr-master.staging.devops.zenhr.com/en/');
        cy.viewport(1920, 1080)
        return this;
      }
    
      navigateToSignIn() {
        cy.get('.navbar-nav > :nth-child(7) > .nav-link').click();
        
        return this;
      }
    
      login(username, password) {
        cy.get('#user_login').type(username);
        cy.get('#user_password').type(password);
        cy.get('.login-submit').click();
        return this;
      }
    
      assertLoginSuccess() {
        cy.url().should('include', '/dashboard');
      }
    }
    
    export default new LoginPage();