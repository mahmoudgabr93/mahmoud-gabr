'use strict';

const expect = require('./chai').expect;

const assertResponseStatusCode =
    (response, statusCode) => expect(response.status).to.deep.equals(statusCode);

module.exports = {
    assertCreateSuccessStatusCode: response => assertResponseStatusCode(response, 201),
    assertSuccessStatusCode: response => assertResponseStatusCode(response, 200),
    assertBadRequestStatusCode: response => assertResponseStatusCode(response, 400),
    assertNotFoundErrorStatusCode: response => assertResponseStatusCode(response, 404),
    assertInternalServerErrorStatusCode: response => assertResponseStatusCode(response, 500),
    assertResponseBody: (actualResponse, expectedResponse) => expect(actualResponse.body).to.containSubset(expectedResponse)
}