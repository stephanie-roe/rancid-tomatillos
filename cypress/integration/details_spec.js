describe('Details page user flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Should show the user all of a movies details when the movie poster is clicked', () => {
        cy.contains('Rancid Tomatillos')
        .get('#726739').click()
        cy.contains('Rancid Tomatillos')
        .get('.MovieDetailsCard').children()
        .should('have.length', 2)
        .get('.mini-poster')
        .should('have.attr', 'src')
        .should('include', 'https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg')
        .get('.details-container').children()
        .should('have.length', 4)
        .get('.title')
        .should('contain', "Cats & Dogs 3: Paws Unite")
        .get('.average-rating')
        .should('contain', 7.5)
        .get('.overview')
        .should('contain', "It's been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.")
        .get('.runtime')
        .should('contain', 84)
    })

    it('Should have a button that directs the user back to the home page', () => {
        cy.get('#726739').click()
        cy.get('.take-me-home').click()
        .get('.MoviesContainer').children()
        .should('have.length', 40)
        .get('#726739')
            .should('have.attr', 'src')
            .should('include', 'https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg')
    
    })

    it('should display all 40 movie posters upon successful network request', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739', 
        {
            "movie": {
            "id": 726739,
            "title": "Cats & Dogs 3: Paws Unite",
            "poster_path": "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
            "release_date": "2020-10-02",
            "overview": "It's been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.",
            "genres": [
            "Comedy",
            "Action"
            ],
            "budget": 0,
            "revenue": 0,
            "runtime": 84,
            "tagline": "",
            "average_rating": 7.5
            }
            })
    })

    it('should display an error message when the network request is unsuccessful', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739', 
            {
            statusCode: 500
        })
        cy.get('#726739').click()
        .get('.error-message')
        .should('contain', 'Oops, something went wrong')
    })

    it('Should have a specific URL when the user is visiting the details page', () => {
        cy.get('#726739').click()
        cy.location('pathname').should('eq', '/726739')
    })

})