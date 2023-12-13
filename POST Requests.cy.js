describe("POST Requests various methods",()=>{

    it("Approach1-Hard Coded",()=>{

        const requestBody={
                                tourist_name:"AdamJonesB",
                                tourist_email:"adam123456@yopmail.com",
                                tourist_location:"America"
                          }
        cy.request(
            
                        {
                                method:"POST",
                                url:"http://restapi.adequateshop.com/api/Tourist",
                                body:requestBody
                        })
                        .then((response)=>{
                            expect(response.status).to.eq(201)
                            expect(response.body.tourist_name).to.eq("AdamJonesB")
                            expect(response.body.tourist_email).to.eq("adam123456@yopmail.com")
                            expect(response.body.tourist_location).to.eq("America")
                        })
    })

    
    it("Approach2 -POST request using dynamic data",()=>{
        const requestBody={
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email:Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location:"America"
      }
cy.request(

    {
            method:"POST",
            url:"http://restapi.adequateshop.com/api/Tourist",
            body:requestBody
    })
    .then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
        expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
        expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
    })

    })

    it.only("Approach3 -POST request using fixture",()=>{
        cy.fixture("tourist").then((data)=>{
            const requestBody=data
            cy.request(

                {
                        method:"POST",
                        url:"http://restapi.adequateshop.com/api/Tourist",
                        body:requestBody
                })
                .then((response)=>{
                    expect(response.status).to.eq(201)
                    expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                    expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                    expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
                })
            
        })
        

      })

})



