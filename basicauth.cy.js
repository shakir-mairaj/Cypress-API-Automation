describe("Basic Authentication",()=>{

    it("Basic Auth",()=>{
        cy.request({
            method:"GET",
            url:"https://postman-echo.com/basic-auth",
            auth:{
                user:"postman",
                pass:"password"
            }
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.authenticated).equal(true)
        })
    })

    it.only("Digest Authentication",()=>{
        cy.request({
            method:"GET",
            url:"https://postman-echo.com/digest-auth",
            auth:{
                username:"postman",
                password:"password"
                
            }
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.authenticated).equal(true)
        })
    }) 


})
