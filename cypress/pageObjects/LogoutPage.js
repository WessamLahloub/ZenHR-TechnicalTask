class LogoutPage {
    openDropdown() {
      cy.get('.grid-container__arrow').click()
      return this;
    }
  
    logout() {
      cy.get('.user-menu__item').contains('Logout').click();
      return this;
    }
  
    assertLogoutSuccess() {
      cy.wait(3000)
      cy.url().should('include', '/logout'); // Adjust the URL accordingly
    }
  }
  
  export default new LogoutPage();