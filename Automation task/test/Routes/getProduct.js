'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { product } = require('../Samples');

describe('GET/products/{id}', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(product);
    })

    it('Check that GET/products API returns 200 status code for existing product', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const response = await helpers.getById('products', createdProductResponse.body.id)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that GET/products API returns 404 status code when the id is not found for a product', async() => {
        const response = await helpers.getById('products', objectId())
        assertions.assertNotFoundErrorStatusCode(response);
    });
})
