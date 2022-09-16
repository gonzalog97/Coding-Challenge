require('cypress-xpath');
describe("US: User create a new account",()=>{
    beforeEach("",()=>{
        cy.fixture("DOM/SignUp.Page").then((the)=>{
            cy.visit(the.urlBase)
            cy.get(the.SignUpBtn)
                .click()
        })
    })
    it("TC1: User register sucessfully",()=>{
        cy.fixture("DOM/SignUp.Page").then((the)=>{
            cy.wait(2000)
            cy.get(the.username.input)
                .type(the.username.data)
            cy.get(the.password.input)
                .type(the.password.data)
            cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[2]')
                .click() 
            cy.wait(1000)
            cy.on('window:alert',(t)=>{
                expect(t).to.contains(the.message.success);
             })
        }) 

    })
    it("TC2: User register fail because the username alredy exist",()=>{
        cy.fixture("DOM/SignUp.Page").then((the)=>{
            cy.wait(2000)
            cy.get(the.username.input)
                .type(the.username.data)
            cy.get(the.password.input)
                .type(the.password.data)
            cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[2]').click() 
            cy.wait(1000)
            cy.on('window:alert',(t)=>{
                expect(t).to.contains(the.message.alredyExist);
             })
        })
    })
    it("TC3: User register fail because the password is null",()=>{
        cy.fixture("DOM/SignUp.Page").then((the)=>{
            cy.wait(2000)
            cy.get(the.username.input)
                .type(the.username.data)
            cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[2]').click() 
            cy.wait(1000)
            cy.on('window:alert',(t)=>{
                expect(t).to.contains(the.message.Field);
             })
        })
    })
    it("TCr: User register is canceled",()=>{
        cy.fixture("DOM/SignUp.Page").then((the)=>{
            cy.wait(2000)
            cy.get(the.username.input)
                .type(the.username.data)
            cy.xpath("//*[@id='signInModal']/div/div/div[3]/button[1]")
                .click()
            cy.get(the.username.input)
                .should('not.be.visible')
        })
    })
})
