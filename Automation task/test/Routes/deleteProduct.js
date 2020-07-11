'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { product } = require('../Samples');

describe('Delete/products', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(product);
    })

    it('Check that DELETE/products API returns 200 status code for existing product', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const deletedProductResponse = await helpers.delete('products', createdProductResponse.body.id)
        assertions.assertSuccessStatusCode(deletedProductResponse);
        assertions.assertResponseBody(deletedProductResponse, sample)
    });

    it('Check that DELETE/products API returns 404 status code when the id is not found for a product', async() => {
        const deletedProductResponse = await helpers.delete('products', objectId())
        assertions.assertNotFoundErrorStatusCode(deletedProductResponse);
    });
})
