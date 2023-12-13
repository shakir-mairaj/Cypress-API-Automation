describe("BearerToken Authentication",()=>{

    const token='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'

    it("BearerToken",()=>{
        cy.request({
            method:"GET",
            url:"https://api.github.com/user/repos",
            headers:{
                Authorization:'Bearer '+token
            }
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body[0].name).contains("API-Assessment")
        })
        
    })

    it.only("API key",()=>{

        cy.request({
            method:"GET",
            url:"api.openweathermap.org/data/2.5/forecast/daily?q=Delhi",
            qs:{
                appid:"fe9c5cddb7e01d747b4611c3fc9eaf2c"
            }
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.city.name).equal("Delhi")
        })
    })
})