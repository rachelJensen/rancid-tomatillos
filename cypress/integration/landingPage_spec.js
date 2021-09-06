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
  describe('As a user, i should be able to load an individual movie details', () => {
    it('should load individual movie\'s details', () => {
      cy
        .get('#\\36 94919 > .poster').click()
        .url().should('eq', 'http://localhost:3000/movies/694919')
    })
  })
})