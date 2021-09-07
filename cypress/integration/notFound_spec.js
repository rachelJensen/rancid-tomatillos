describe('404 not found page', () => {
  beforeEach(() => {
    cy.fixture('mockSingleMovie').then((movie) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/627290', movie)
    })
  });
  
  it('should show the 404 page not found error if movie id is invalid', () => {
    cy.visit('http://localhost:3000/movies/622')
    cy
      .get('h3').contains('Page Not Found')
  })

  it('should show the 404 not found message if an invalid path is given', () => {
    cy.visit('http://localhost:3000/blerg')
    cy
      .url().should('eq', 'http://localhost:3000/blerg')
      .get('h2').contains('404')
      .get('h3').contains('Page Not Found')
  })

  it('should display error message 404 Page Not Found', () => {
    cy.visit('http://localhost:3000/not-found')
    cy
      .get('h2').contains('404')
      .get('h3').contains('Page Not Found')
  })
})

describe('server failure', () => {
  it('should display an error message if the server doesn\'t return a single movie', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/627290'
    },
    {
      statusCode: 500,
      ok: false,
      body: { 
        message: `Our servers are down.` 
      }
    })

    cy.visit('http://localhost:3000/movies/627290')
    cy
      .get('h3').contains('Please try again later')
  })

  it('should display an error message if the server doesn\'t return all movies', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    },
    {
      statusCode: 500,
      ok: false,
      body: { 
        message: `Our servers are down.` 
      }
    })

    cy.visit('http://localhost:3000/movies')
      .get('h2').contains('Something went wrong')
  })
})