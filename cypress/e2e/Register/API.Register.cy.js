/* 
1.Register
As a defined user, I want to register at reqres.in site so that I can login.
Acceptance Criteria
    -Method: POST
    -Endpoint: /api/register
    -A defined user can register
    -HTTP Status is 200
    -Request body contains an username and a password
    -Response body contains an id and a token.
    -An undefined user can’t login
    -HTTP Status is 400
    -Response body contains an error field: "Note: Only defined users succeed registration"
    -An partial request body will return a HTTP Status 400, an error message with missing fields details
 */
describe("Registro de usuario",()=>{
    it("Usuario se registra exitosamente",()=>{
        cy.fixture("Register.DOM/API.Register.Page").then((the)=>{
            cy.request({
                method: 'POST',
                url: `${the.urlBase}${the.endPointRegister}`,
                body: the.data.valid
              }).then( ({ status }) => {
                expect(status).to.eq(the.status.sucess)
              })
        })
    })
    it("Usuario falla al registrarse",()=>{
        cy.fixture("Register.DOM/API.Register.Page").then((the)=>{
            cy.fixture("Register.DOM/API.Register.Page").then((the)=>{
                cy.request({
                    method: 'POST',
                    url: `${the.urlBase}${the.endPointRegister}`,
                    failOnStatusCode: false, 
                    body: the.data.invalid
                    }).then( (response) => {
                        expect(response.status).to.eq(the.status.fail)
                        expect(response.body.error).to.contain(the.errorMsj)
                    })
            })
        })
    })
})