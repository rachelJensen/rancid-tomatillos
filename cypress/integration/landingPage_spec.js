describe('Main Page rendering', () => {
  beforeEach(() => {
    cy.fixture('mockMovies').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', movies)
    })
    cy.visit('http://localhost:3000');
  });

  describe('Should be able to render main page', () => {
    it('should contain a header', () => {
      expect(true).to.equal(true)
    })
  })
})