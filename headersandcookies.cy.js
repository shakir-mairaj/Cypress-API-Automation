describe("HeadersandCookies",()=>{

    let authToken=null

    before("Creating access token",()=>{

        cy.request({
            method:"POST",
            url:"https://simple-books-api.glitch.me/api-clients/",
            headers:{
                'Content-Type':"application/json"
            },
            body:{
                clientName:"KenleyJames",
                clientEmail:Math.random().toString(5).substring(2)+"@gmail.com"
            }

        })
        .then((response)=>{
            authToken=response.body.accessToken
        })
    })

    before("creating a new order",()=>{

        cy.request({
            method:"POST",
            url:"https://simple-books-api.glitch.me/orders",
            headers:{
                'Content-Type':"application/json",
                'Authorization':'Bearer '+authToken

            },
            body:{
                    "bookId":1,
                    "customerName":"xyzabc"
            }

        }).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.created).equal(true)
        })

    })

    it("Fetching the orders",()=>{

        cy.request({
            method:"GET",
            url:"https://simple-books-api.glitch.me/orders",
            headers:{

                'Content-Type':"application/json",
                'Authorization':'Bearer '+authToken,

            },
            cookies:{
                cookieName:"mycookie"
            }
        })
        .then((response)=>{
            expect(response.status).equal(200)
            
        })
    })
})