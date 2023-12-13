

describe("API Chaining",()=>{

    it("API Chaining test",()=>{

        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts"
        })
        .then((response)=>{
            expect(response.status).equal(200)
            let postid=response.body[0].id
            return postid
        })
        .then((postid)=>{
            cy.request({
                method:"GET",
                url:'https://jsonplaceholder.typicode.com/comments?postId=${postid}'
            })
            .then((response)=>{
                expect(response.status).equal(200)
                expect(response.body[1].email).contains("Jayne_Kuhic@sydney.com")
            })
        })
    })
})