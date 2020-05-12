/// <reference types="cypress" />

//Elements
const titleOfServicesPage = 'Acme Web Deisgn | Services'

//functions
function checkTitleOfServicesPage(cy){
    cy.title().should('eq', titleOfServicesPage)

}

//exports
module.exports = {
    checkTitleOfServicesPage
}