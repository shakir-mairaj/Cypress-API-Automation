describe("HTTP Requests",()=>{

    it("GET Request",()=>{

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)
    })

    it("Post Request",()=>{

        cy.request( {
                        method:"POST",
                        url:"https://jsonplaceholder.typicode.com/posts/",
                        body: {
                                    title:"Testing Post request",
                                    body:"This is a post request",
                                    userid:2
                              }
        })
        .its('status')
        .should('equal',201)
    })

    it("PUT Request",()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.typicode.com/posts/1",
            body:   {
                         title:"Test Put call",
                         body:"This is put call",
                         userid:2,
                         id:1

                     }

        })
        .its('status')
        .should('equal',200)
    })

    it("Delete Request",()=>{
        cy.request("DELETE","https://jsonplaceholder.typicode.com/posts/1")
        .its('status')
        .should("equal",200)
    })
})

