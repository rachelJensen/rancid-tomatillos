describe('ApiCall errors', () => {
  beforeEach(() => {
    cy.fixture('mockMovies.json').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', movies)
    })
    cy.visit('http://localhost:3000');
  });

  describe('Should be able to display different error handling messages', () => {
    it('should display an error message for 500s status codes', () => {
      cy.intercept({
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
      },
      {
        statusCode: 404,
        body: { 
          message: `TEST ME` 
        }
      })
    });
  })
})
