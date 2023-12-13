describe("Query Parameters",()=>{

    it("Passing Query Parameters",()=>{

        cy.request({

            method:"GET",
            url:"https://reqres.in/api/users",
            qs:{page:2} //query parameter

        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.total).equal(12)
            expect(response.body.data[1]).have.property('id',8)

        })


    })
})