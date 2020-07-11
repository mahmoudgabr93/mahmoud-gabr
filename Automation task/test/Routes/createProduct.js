'use strict';

const _ = require('lodash');

const { assertions, helpers} = require('../Resources');
const { product } = require('../Samples');

describe('POST/products', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(product);
    })

    it('Check that post/products API returns 201 status code for valid request body', async() => {
        const response = await helpers.create('products', sample);
        assertions.assertCreateSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that POST/products API return a status code 400 when product name is missing', async() => {
        _.unset(sample, 'name');
        const response = await helpers.create('products', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/products API return a status code 400 when product type is missing', async() => {
        _.unset(sample, 'type');
        const response = await helpers.create('products', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/products API return a status code 400 when product upc is missing', async() => {
        _.unset(sample, 'upc');
        const response = await helpers.create('products', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/products API return a status code 400 when product description is missing', async() => {
        _.unset(sample, 'description');
        const response = await helpers.create('products', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/products API return a status code 400 when product model is missing', async() => {
        _.unset(sample, 'model');
        const response = await helpers.create('products', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/products API return a status code 400 when request body is empty', async() => {
        const response = await helpers.create('products', {});
        assertions.assertBadRequestStatusCode(response);
    });
})
