class SideMenuLinksPage {
  open() {
    cy.get('.side-nav__elements').click();
    return this;
  }

  assertLinksFunctional() {
    cy.get('.side-nav__elements').each((link) => {
      const href = link.prop('href');

      // Check if the href attribute is not empty
      if (href) {
        // Perform the HTTP request
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).then((response) => {
          // Check the status code
          expect(response.status).to.not.eq(404, `Link ${href} returned a 404 status code`);
        });
      } else {
        cy.log('Link has an empty href attribute'); // Error handler
      }
    });
  }
}

export default new SideMenuLinksPage();
