describe("TS : Usuario agrega un item al SP",()=>{
    let username = "l@ur@",
        password = "1234";
    before("Login de usuario ya existente",()=>{
        cy.login(username,password)
        cy.get("#nameofuser")
            .should("contain",`Welcome ${username}`)
    })
    it("TC: Usuario agrega un item al SP",()=>{
        //Se comprueba que el SP este vacio
        cy.contains("Cart").click()
        cy.contains("Products").should('be.visible')
        cy.wait(2000)
        cy.get("#tbodyid").then($list=>{
            if($list.find(".success a").length>0){
                cy.get("td>a").each((element)=>{
                    element.click()
                }) 
            }else{
                cy.get(".success").should("not.exist")
            }
        })
        cy.wait(1000)
        cy.contains("Home").click()
        cy.wait(1000)
        cy.get("h4").contains('Samsung galaxy s6')
            .click()
        cy.url().should("include","idp")
        cy.get(".btn-success").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Product added.');
         })
         //Se comprueba que el SP no este vacio
        cy.contains("Cart").click()
        cy.wait(1000)
        cy.contains("Products").should('be.visible')
        cy.get(".success").should("be.visible")
    })
})
