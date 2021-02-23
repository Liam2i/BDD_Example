import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

beforeEach(function() {
		// Start at Defra Manager dashboard
		cy.visit('https://dm-fe-dev-gh7.appspot.com')
		
		// Signs in to Defra Manager
		cy.get('input[type="email"]').type('fake@email.com')
		cy.get('input[type="password"]').type('password')
		cy.contains('Sign in as a Sites Officer').click()
})

// GIVEN

Given ('I goto search page', () => {
	cy.contains('Search').click()
})

Given ('I goto alerts page', () => {
	cy.get('.sc-kgoBCf.bJjuPK').contains('Alerts').click()
})

Given ('I goto reports page', () => {
	cy.contains('Reports').click()
})

Given ('I goto favourites page', () => {
	cy.contains('Favourites').click()
})


// WHEN

When ('I click log out', () => {
	cy.get('button[type="button"]').eq(1).click()
})


When ('I click on alerts', () => {
	cy.get('.sc-ksYbfQ.dboyWt').eq(0)
		.find('tr').eq(1)
		.find('td a').click()
})

When ('I click on alert settings', () => {
	cy.contains('Settings').click()
})


When ('I sort card', () => {
	cy.get('#selectEwcCode_1').select('12 90 18')
})


When ('I search', () => {	
		cy.get('input[type="search"]').type("Biffa")
		
		cy.get('button[title="Search"]').click()
})

When('I click on search results', () => {
	// Search the results, then click on Biffa
	cy.get('.sc-kIPQKe.frfjsE').each((el, index, list) => {			
		var t = el.find('h3 a').text()
		var t2 = el.find('p').eq(0).text()
		
		if (t.includes('Biffa') && t2.includes('CLIFTON')) {
			cy.wrap(el).find('h3 a').click()
		}	
		
	})
})

When ('I sort search', () => {
	cy.get('.sc-bZQynM.jejjgg').select('Vegetables')
})


When ('I click create report', () => {
	cy.contains('Create Report').click()
})

When ('I enter report details', () => {
	cy.get('input[type="radio"]').first().check()
		
	cy.get('.sc-jwKygS.cuuRMD label').each((el, index, list) => {
		cy.wrap(el).find('input').type('1')
	})
	
	cy.get('input[type="checkbox"]').first().check()
	
	cy.contains('View Report').click()
})


When ('I click reports', () => {
	cy.get('.sc-kTUwUJ.bAAmtm').find('li a').eq(2).click()
})


// THEN

Then ('I am logged out', () => {
	cy.url().should('include', 'auth/login')
})


Then ('Card is sorted', () => {
	cy.get('#selectEwcCode_1').should('have.value', '1')
})


Then ('Alerts are displayed', () => {
	cy.url().should('include', 'alerts')
})

Then ('Alerts settings are displayed', () => {
	
})


Then ('I view site page', () => {
	//cy.screenshot('End')
})

Then ('Results are sorted', () => {
	cy.get('.sc-bZQynM.jejjgg').should('have.value', '2')
})


Then ('Report is created', () => {
	
})


Then ('Favourite reports displayed', () => {
	
})