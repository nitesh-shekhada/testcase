const chai = require("chai")
const chaiHttp = require("chai-http")
const { expect } = require("chai")
const app = require("./index")

chai.use(chaiHttp)

describe("testcase",async()=>{
    it("user :: get",async()=>{
        try {
            const res = await chai.request(app).get("/user");
            expect(res.text).equal("Welcome to the user")            
        } catch (error) {
            expect(error).to.throw()
        }
    })

    it("about :: get",async()=>{
        try {
            const res = await chai.request(app).get("/about");
            expect(res.text).equal("Welcome to the about")            
        } catch (error) {
            expect(error).to.throw()
        }
    })

})
