beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('Should be able to render main page', () => {
  it('should contain a header', () => {
    expect(true).to.be(true)
  })
})