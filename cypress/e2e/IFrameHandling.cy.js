describe("Handling Frames", ()=>{
	it('Approach1', ()=>{
		cy.visit("http://the-internet.herokuapp.com/iframe")
		// cy.get('#mce_0_ifr')
		const iframe = cy.get("#mce_0_ifr")
				.its('0.contentDocument.body')
				.should('be.visible')
				.then(cy.wrap);
		iframe.clear().type("Welcome");
		
	})
})