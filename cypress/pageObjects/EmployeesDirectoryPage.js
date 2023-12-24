class EmployeesDirectoryPage {
    open() {
      cy.get('.side-nav__elements > :nth-child(3) > [href="#"]').click({force:true})
      
      return this;
    }
  
    clickButton() {
      cy.get('.open > .side-nav__submenu > .side-nav__submenu-items > .nano > .nano-content > :nth-child(2) > a').click()
            return this;
    }
  
    assertEntriesCountGreaterThanTwo() {
      cy.get('#directory_char_list > :nth-child(9) > a').click()
      cy.get('.row').invoke('text').then((text) => cy.log(text)); //print all .row class items
      cy.get('.row').should('have.length.gt', 2); //.row class should have length more than 2
 
      
    
    }
  }
  
  export default new EmployeesDirectoryPage();