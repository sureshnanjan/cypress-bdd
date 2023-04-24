describe('Uploading Files', () => {
    it.only('Uploading a file with select', () => {
      //cy.visit('/');
      cy.visit('https://the-internet.herokuapp.com/');
      cy.contains('File Upload').click();
      // cy.get('#file-upload')
      cy.get('#file-upload').selectFile('cypress/fixtures/example.json');
      cy.get('#file-submit').click()
      cy.get('#uploaded-files').should('contain.text','example.json');
  
      //cy.get('#content > ul > li > a').should('have.length', 46);    
      // cy.get(':nth-child(1) > a')
      // #content > ul > li:nth-child(1) > a
      //cy.window().invoke()
    });
    it('Uploading a file with Drag Drop', () => {
      //cy.visit('/');
      cy.visit('https://the-internet.herokuapp.com/');
      cy.contains('File Upload').click();
      // cy.get('#file-upload')
      //cy.get('#drag-drop-upload').selectFile('cypress/fixtures/example.json',{action:'drag-drop'});
      cy.document().selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      cy.get('#file-submit').click()
      cy.get('#uploaded-files').should('contain.text','example.json');
  
      //cy.get('#content > ul > li > a').should('have.length', 46);    
      // cy.get(':nth-child(1) > a')
      // #content > ul > li:nth-child(1) > a
      //cy.window().invoke()
    });
});