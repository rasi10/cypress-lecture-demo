/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage' 
import * as aboutFuncs from '../pages/aboutPage'
import * as servicesFuncs from '../pages/servicesPage'

// Test suite
describe('Test suite - with PO', function(){
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/acme_website/acme/index.html')
        indexFuncs.checkTitleOfIndexPage(cy)
    })


    it('Navigate through pages', function(){
        indexFuncs.navigateToAboutPage(cy, 'About Us')
        aboutFuncs.checkTitleOfAboutPage(cy)
        aboutFuncs.navigateToServicesPage(cy,'Services')
        servicesFuncs.checkTitleOfServicesPage(cy)
    })
})