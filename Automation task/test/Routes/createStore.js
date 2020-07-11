'use strict';

const _ = require('lodash');

const { assertions, helpers} = require('../Resources');
const { store } = require('../Samples');

describe('POST/stores', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(store);
    })

    it('Check that post/stores API returns 201 status code for valid request body', async() => {
        const response = await helpers.create('stores', sample);
        assertions.assertCreateSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that POST/stores API return a status code 400 when stores name is missing', async() => {
        _.unset(sample, 'name');
        const response = await helpers.create('stores', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/stores API return a status code 400 when stores address is missing', async() => {
        _.unset(sample, 'address');
        const response = await helpers.create('stores', sample);
        assertions.assertBadRequestStatusCode(response);
    });


    it('Check that POST/stores API return a status code 400 when stores city is missing', async() => {
        _.unset(sample, 'city');
        const response = await helpers.create('stores', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/stores API return a status code 400 when stores state is missing', async() => {
        _.unset(sample, 'state');
        const response = await helpers.create('stores', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/stores API return a status code 400 when stores zip is missing', async() => {
        _.unset(sample, 'zip');
        const response = await helpers.create('stores', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/stores API return a status code 400 when request body is empty', async() => {
        const response = await helpers.create('stores', {});
        assertions.assertBadRequestStatusCode(response);
    });
})
