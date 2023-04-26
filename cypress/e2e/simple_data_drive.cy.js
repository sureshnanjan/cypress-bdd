/// <reference types="cypress" />
describe('Uploading Files', () => {
    let data;
    before(()=>{
        cy.fixture("environment").then((di)=>{
            data = di;
        });

    })
   
    it('Data is available from Fixtures', () => {
        expect(data).haveOwnProperty("stagingurl");

    });
    
    it('Data is available from Fixtures', () => {
        expect(data.stagingurl).contains("suresh");

    });
});