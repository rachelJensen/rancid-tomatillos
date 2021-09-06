describe('404 not found page', () => {
  beforeEach(() => {
    cy.fixture('mockSingleMovie').then((movie) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/627290', movie)
    })
    // cy.visit('http://localhost:3000/movies/622');
  });
  
  it('should redirect to the not found page if movie id is invalid', () => {
    cy.visit('http://localhost:3000/movies/622')
    cy
      .url().should('eq', 'http://localhost:3000/not-found')
  })

  it('should show the 404 not found message if an invalid path is given', () => {
    cy.visit('http://localhost:3000/about')
    cy
      .url().should('eq', 'http://localhost:3000/about')
      .get('h2').contains('404')
  })

  it('should display error message 404 Page Not Found', () => {
    cy.visit('http://localhost:3000/not-found')
    cy
      .get('h2').contains('404')
      .get('h3').contains('Page Not Found')
  })
})