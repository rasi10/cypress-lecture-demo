/// <reference types="cypress" />

// elements
const titleOfAboutPage = 'Acme Web Deisgn | About'
const navServicesLink = '[test-id=nav-services]'

// functions / actions
function checkTitleOfAboutPage(cy){
    cy.title().should('eq', titleOfAboutPage)
}

function navigateToServicesPage(cy, contentToConfirm){
    cy.get(navServicesLink).click()
    cy.contains(contentToConfirm)
}

// exports

module.exports = {
    checkTitleOfAboutPage, 
    navigateToServicesPage
}