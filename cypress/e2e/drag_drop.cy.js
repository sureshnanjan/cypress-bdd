const DragDrop = require('..\pages\DragDrop');
describe('Drag and Drop Demo',()=>{
    it('Drag Drop Works from A to B', () => {
        const dataTransfer = new DataTransfer();
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.get('#columns > .column:nth-child(1) > header').should('have.text','A');
        // Choose A and Start the Drag
        cy.get('#column-a').trigger('dragstart',{dataTransfer});
        cy.get('#column-b').trigger('drop',{dataTransfer});
        // Drop on The Other element
        cy.get('#columns > .column:nth-child(1) > header').should('have.text','B');
        DragDrop.dragDrop()

        
    });

    it('Drag Drop Works from B to A', () => {
        
    });
})