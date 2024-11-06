import { expect } from "chai";
import pkg from "pactum";
const { spec } = pkg;
import "dotenv/config";
import { baseUrl, userID } from "../helpers/data.js";
//import ( baseUrl, userID) from "../helpers/data.js";

describe("Api tests", () => {
  it("get request", async () => {
    //skip pomija
    const response = await spec().get('${baseUrl}/BookStore/v1/Books')
      .inspect();
    //console.log("nie działa dotenv?" + " " + process.env.SECRET_PASSWORD);
    expect(response.statusCode).to.eql(200);
    expect(response.body.books[1].title).to.eql(
      "Learning JavaScript Design Patterns"
    );
    expect(response.body.books[0].author).to.eql("Richard E. Silverman");
    expect(response.body.books[1].author).to.eql("Addy Osmani");
    expect(response.body.books[2].author).to.eql("Glenn Block et al.");
    expect(response.body.books[3].author).to.eql("Axel Rauschmayer");
    expect(response.body.books[4].author).to.eql("Kyle Simpson");
    //expect(response.body.books[0].pages).to.eql("234");
    // indeksowanie
    expect(JSON.stringify(response.body)).to.include("Richard E. Silverman");
    const responseB = JSON.stringify(response.body);
    expect(responseB).to.include("Richard E. Silverman");
  });

  it.skip("Create a user", async () => {
    const response = await spec()
      .post("https://demoqa.com/Account/v1/User")
      .withBody({
        userName: "Andrzej",
        password: process.env.SECRET_PASSWORD,
      })
      .inspect();
    expect(response.statusCode).to.eql(201);
    // ab879ba3-ea29-4b6b-908a-70c78404a5b2
  });
});
