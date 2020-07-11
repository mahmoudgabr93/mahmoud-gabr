'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { store } = require('../Samples');

describe('PATCH/stores/{id}', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(store);
    })

    it('Check that PATCH/stores API returns 200 status code for existing store', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const response = await helpers.update('stores', createdStoreResponse.body.id, createdStoreResponse.body)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that PATCH/stores API updates store name', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'name', 'test')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store type', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'type', 'test')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store address', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'address', '122 test street')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store address2', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'address2', '122 fake street')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store city', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'city', 'testing update')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store state', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'state', 'testing update')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store zip', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'zip', 'testing update')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store lat', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'lat', 'testing update')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store lng', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'lng', 'testing update')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API updates store hours', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const updatedSample = _.set(createdStoreResponse.body, 'hours', 'testing update')
        const response = await helpers.update('stores', createdStoreResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/stores API returns 404 status code when the id is not found for a store', async() => {
        const response = await helpers.update('stores', objectId(), sample)
        assertions.assertNotFoundErrorStatusCode(response);
    });
})
