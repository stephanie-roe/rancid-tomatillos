describe('Homepage user flow', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Should be able to visit http://localhost:3000/ and see a title and movie posters displayed', () => {
        cy.contains('Rancid Tomatillos');
        cy.get('.MoviesContainer').children()
            .should('have.length', 40);
        cy.get('#726739')
            .should('have.attr', 'src')
            .should('include', 'https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg');
    });

    it('should display all 40 movie posters upon successful network request', () => {
        cy.fixture("movies_data.json").as("moviesData");
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',"moviesData");
    });

    it('should display an error message when the network request is unsuccessful', () => {
        cy.fixture("error_data.json").as("errorData");
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',"errorData")
        .get('.error-message')
        .should('contain', 'Oops, something went wrong');
    });

    it('Should have a specific URL when the user is visiting the homepage', () => {
        cy.location('pathname').should('eq', '/');
    });

  });
