'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { service } = require('../Samples');

describe('PATCH/services/{id}', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(service);
    });

    it('Check that PATCH/services API updates service name', async() => {
        const createdServiceResponse = await helpers.create('services', sample);
        const updatedSample = _.set(createdServiceResponse.body, 'name', 'test')
        const response = await helpers.update('services', createdServiceResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.omit(updatedSample, 'updatedAt', response.body.updatedAt))
    });

    it('Check that PATCH/services API returns 404 status code when the id is not found for a service', async() => {
        const response = await helpers.update('services', objectId(), sample)
        assertions.assertNotFoundErrorStatusCode(response);
    });
})
