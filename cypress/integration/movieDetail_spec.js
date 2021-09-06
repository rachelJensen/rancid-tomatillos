describe('Movie Page rendering', () => {
  beforeEach(() => {
    cy.fixture('mockSingleMovie').then((movie) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/627290', movie)
    })
    cy.visit('http://localhost:3000/movies/627290');
  });

  describe('Should be able to render movie page', () => {
    it('should contain a header', () => {
      cy.get('header').contains('Rancid Tomatillos')
      })
    
    it('should have a movie title', ()=> {
      cy.get('h2').contains('Antebellum')
    })

    it('should have a tagline', ()=> {
      cy.get('.tagline').contains('If it chooses you, nothing can save you.')
    })

    it('should have genres', () => {
      cy.get('.genres').contains('Horror')
    })

    it('should a release date', () => {
      cy.get('.release').contains('2020')
    })

    it('should have an overview', () => {
      cy.get('.overview').contains('Successful author Veronica finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before it\'s too late.')
    })

    it('should have a rating rounded to 1 decimal', () => {
      cy.get('.rating').contains(6.6)
    })

    it('should show a runtime', () => {
      cy.get('.runtime').contains(105)
    })

    it('should show a budget', () => {
      cy.get('.budget').contains('$12,000,000')
    })

    it('should have a movie image backdrop', () => {
      cy.get('.backdrop').should('be.visible')
    })

    it('should have a video player', () => {
     cy.get('.react-player')
        .should('exist')

    })
  })
})

describe('As a user, i should be able to return to the home page from the movie page', () => {
  beforeEach(() => {
    cy.fixture('mockMovies.json').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', movies)
    })
  })  
  
  it('should load home page from header click', () => {
    cy
      .get('header').click()
      .url().should('eq', 'http://localhost:3000/movies')
  })

  it('should go back to the last page when back button is clicked', () => {
    
    cy
      .go('back')
      .url().should('eq', 'http://localhost:3000/movies/627290')
  })
})
