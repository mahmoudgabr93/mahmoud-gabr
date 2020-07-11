'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { service } = require('../Samples');

describe('Delete/services', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(service);
    })

    it('Check that DELETE/services API returns 200 status code for existing product', async() => {
        const createdServiceResponse = await helpers.create('services', sample);
        const deletedServiceResponse = await helpers.delete('services', createdServiceResponse.body.id)
        assertions.assertSuccessStatusCode(deletedServiceResponse);
        assertions.assertResponseBody(deletedServiceResponse, sample)
    });

    it('Check that DELETE/services API returns 404 status code when the id is not found for a product', async() => {
        const deletedServiceResponse = await helpers.delete('services', objectId())
        assertions.assertNotFoundErrorStatusCode(deletedServiceResponse);
    });
})
