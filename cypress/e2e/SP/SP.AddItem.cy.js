describe("TS : Usuario agrega un item al SP",()=>{
    let username = "l@ur@",
        password = "1234";
    before("Login de usuario ya existente",()=>{
        cy.login(username,password)
        cy.get("#nameofuser")
            .should("contain",`Welcome ${username}`)
    })
    it("TC: Usuario agrega un item al SP",()=>{
        cy.get("h4").contains('Samsung galaxy s6')
            .click()
        cy.url().should("include","idp")
        cy.get(".btn-success").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Product added.');
         })
    })
})