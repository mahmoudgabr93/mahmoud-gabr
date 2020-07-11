'use strict';

const _ = require('lodash');

const { assertions, helpers} = require('../Resources');
const { service } = require('../Samples');

describe('POST/services', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(service);
    })

    it('Check that post/services API returns 201 status code for valid request body', async() => {
        const response = await helpers.create('services', sample);
        assertions.assertCreateSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that POST/services API return a status code 400 when service name is missing', async() => {
        _.unset(sample, 'name');
        const response = await helpers.create('services', sample);
        assertions.assertBadRequestStatusCode(response);
    });


    it('Check that POST/services API return a status code 400 when request body is empty', async() => {
        const response = await helpers.create('services', {});
        assertions.assertBadRequestStatusCode(response);
    });
})
