'use strict';

const _ = require('lodash');

const { assertions, helpers} = require('../Resources');
const expect = require('../Resources/chai').expect;

describe('GET/categories', () => {
    it('Check that GET/categories API returns 200 status code for valid request body', async() => {
        const response = await helpers.get('categories');
        assertions.assertSuccessStatusCode(response);
    });

    it('Check that GET/categories API that total number of categories as integer value', async() => {
        const response = await helpers.get('categories');
        assertions.assertSuccessStatusCode(response);
        expect(response.body.total).to.be.a('number')
    });

    it(`Check that GET/categories API apply the limit parameter by validating
        the length of data array is equal to the limit parameter`, async() => {
            const response = await helpers.get('categories', 20);
            assertions.assertSuccessStatusCode(response);
            expect(response.body.data).length.be(20)
        });

    it('Check that GET/categories API returns the limit and skip parameters values', async() => {
        const response = await helpers.get('categories', 20, 10);
        assertions.assertSuccessStatusCode(response);
        expect(response.body).to.contains.keys(['limit', 'skip']);
        expect(response.body.limit).to.be.eq(20);
        expect(response.body.skip).to.be.eq(10);
    });

    it('Check that GET/categories returns a status code 500 when limit parameter is a string', async() => {
        const response = await helpers.get('categories', 'test', 10);
        assertions.assertInternalServerErrorStatusCode(response);
    });

    it('Check that GET/categories returns a status code 500 when skip parameter is a string', async() => {
        const response = await helpers.get('categories', 20, 'test');
        assertions.assertInternalServerErrorStatusCode(response);
    });
});
