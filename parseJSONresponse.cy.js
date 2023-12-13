describe("Parsing JSON response",()=>{

    it("JSONresponse",()=>{

        cy.request({
            method:"GET",
            url:"https://fakestoreapi.com/products"
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body[0].id).equal(1)
            expect(response.body[0].price).equal(109.95)

            expect(response.body[10].id).equal(11)
            expect(response.body[10].price).equal(109)
            expect(response.body[10].title).equal("Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5")
            expect(response.body[10].rating.rate).equal(4.8)
        })
    })

    it.only("Parsing complex json response",()=>{
        let totalprice=0
        cy.request({
            method:"GET",
            url:"https://fakestoreapi.com/products",
            qs:{limit:5}
        })
        .then((response)=>{
            expect(response.status).equal(200)

            response.body.forEach(element=>{
                totalprice=totalprice+element.price

            })
            expect(totalprice).equal(899.23)
        })

    })
})