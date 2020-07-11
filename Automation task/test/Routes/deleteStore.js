'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { store } = require('../Samples');

describe('Delete/stores', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(store);
    })

    it('Check that DELETE/stores API returns 200 status code for existing store', async() => {
        const createdStoreResponse = await helpers.create('stores', sample);
        const deletedStoreResponse = await helpers.delete('stores', createdStoreResponse.body.id)
        assertions.assertSuccessStatusCode(deletedStoreResponse);
        assertions.assertResponseBody(deletedStoreResponse, sample)
    });

    it('Check that DELETE/stores API returns 404 status code when the id is not found for a store', async() => {
        const deletedStoreResponse = await helpers.delete('stores', objectId())
        assertions.assertNotFoundErrorStatusCode(deletedStoreResponse);
    });
})
