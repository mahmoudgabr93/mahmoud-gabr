'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { service } = require('../Samples');

describe('GET/services/{id}', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(service);
    })

    it('Check that GET/services API returns 200 status code for existing service', async() => {
        const createdServiceResponse = await helpers.create('services', sample);
        const response = await helpers.getById('services', createdServiceResponse.body.id)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that GET/services API returns 404 status code when the id is not found for a service', async() => {
        const response = await helpers.getById('services', objectId())
        assertions.assertNotFoundErrorStatusCode(response);
    });
})
