describe('Homepage user flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    
    it('Should be able to visit http://localhost:3000/ and see a title and movie posters displayed', () => {
        cy.contains('Rancid Tomatillos')
        cy.get('.MoviesContainer').children()
            .should('have.length', 40)
        cy.get('#726739')
            .should('have.attr', 'src')
            .should('include', 'https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg')
    });

    // it('should show a header that says Rancid Tomatillos', () => {

    // })

  });