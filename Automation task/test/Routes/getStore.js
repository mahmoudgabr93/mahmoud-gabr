'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { store } = require('../Samples');

describe('GET/stores/{id}', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(store);
    })

    it('Check that GET/stores API returns 200 status code for existing store', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const response = await helpers.getById('stores', createdStoreResponse.body.id)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that GET/stores API returns 404 status code when the id is not found for a store', async() => {
        const response = await helpers.getById('stores', objectId())
        assertions.assertNotFoundErrorStatusCode(response);
    });
})
