describe("OAuth Authentication",()=>{

    let accessToken=""

    it("OAuthPosttogetaccesstoken",()=>{

        cy.request({
            method:"POST",
            url:"https://github.com/login/oauth/access_token",
            qs:{
                client_id:"412ffc521d00f1e19231",
                client_secret:"5454300d8c08554c104ec6c43fc85a186d7bea7b",
                code:"b1ab1e1f822c083eedf4"
            }
        })
        .then((response)=>{
            const params=response.body.split("&")
            accessToken=params[0].split("=")[1]
            cy.log("generated access token is"+accessToken)
        })
    })

    it("Oauthgetrequest",()=>{

        cy.request({
            method:"GET",
            url:"https://api.github.com/user/repos",
            headers:{
                Authorization:'Bearer '+accessToken
            }
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body[0].id).equal(726868555)
        })
    })
})