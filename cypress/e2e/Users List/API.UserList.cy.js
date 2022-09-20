/* 
As an API client, I want to get the list of all defined users
Acceptance Criteria
    -Method: GET
    -Endpoint: /api/users
    -HTTP Status is 200
    -Response body contains the following 6 fields page, per_page, body, total_pages, data and support
    -The per_page value matches the data length
    -Updating the per_page or any relevant field will reflect in other field values
*/

describe("Obtencion de Listas de Usuarios (con delay de 3 segundos)",()=>{
    it("Usuario obtiene con exito las listas de usuario",()=>{
        cy.request({
            method: 'GET',
            url: '/api/users?delay=3',
          }).then( ({ status ,body}) => {
            expect(status).to.eq(200)
            expect(body).to.have.property('total')
            expect(body).to.have.property('total_pages')
            expect(body).to.have.property('support')
            expect(body).to.have.property('page')
            expect(body.data).have.length(body.per_page)
          })
    })
})