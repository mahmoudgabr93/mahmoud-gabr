'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { product } = require('../Samples');

describe('PATCH/products/{id}', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(product);
    })

    it('Check that PATCH/products API returns 200 status code for existing product', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const response = await helpers.update('products', createdProductResponse.body.id, createdProductResponse.body)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that PATCH/products API updates product name', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'name', 'test')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product type', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'type', 'test')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product upc', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'upc', 'test')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product price', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'price', 200)
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product description', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'description', 'testing update')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product model', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'model', 'testing update')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product shipping', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'shipping', 'testing update')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product manufacturer', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'manufacturer', 'testing update')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product url', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'url', 'testing update')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API updates product image', async() => {
        const createdProductResponse = await helpers.create('products', sample);
        const updatedSample = _.set(createdProductResponse.body, 'image', 'testing update')
        const response = await helpers.update('products', createdProductResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/products API returns 404 status code when the id is not found for a product', async() => {
        const response = await helpers.update('products', objectId(), sample)
        assertions.assertNotFoundErrorStatusCode(response);
    });
})
