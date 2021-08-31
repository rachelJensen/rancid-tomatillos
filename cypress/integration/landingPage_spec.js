describe('Main Page rendering', () => {
  beforeEach(() => {
    cy.fixture('mockMovies.json').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', movies)
    })
    cy.visit('http://localhost:3000');
  });

  describe('Should be able to render main page', () => {
    it('should contain a header', () => {
      cy.get('header').contains('Rancid Tomatillos')
      })
      it('should render three posters to the main screen', () => {
      cy.get('article').should('have.length', 3)
    })
  })
})