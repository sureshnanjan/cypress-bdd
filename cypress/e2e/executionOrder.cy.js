describe('Execution of Cypress Commands',()=>{
    it('How Cypress command run ', () => {
        // Asynchronous Code 
        // Async Promi
        // Return Value arguments
        // const result = funcCall() promise 
        // 
        
        cy.log('Starting cypress').then(()=>{
            console.log('This is the Start of the test case');
        }

        )
        cy.wait(6000);
         // Fires the execution in back bround and continue
        cy.log("This is step 1");
        cy.wait(6000);
        cy.log('Almost finishing cypress execution').then(
            ()=>{console.log('This is the end of the test case'); }
        )
        
        
    });
})