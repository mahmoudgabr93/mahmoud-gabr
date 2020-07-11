'use strict';

const _ = require('lodash');

const { assertions, helpers} = require('../Resources');
const { category } = require('../Samples');

describe('POST/categories', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(category);
    })

    it('Check that post/categories API returns 201 status code for valid request body', async() => {
        const response = await helpers.create('categories', sample);
        assertions.assertCreateSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that POST/categories API return a status code 400 when category name is missing', async() => {
        _.unset(sample, 'name');
        const response = await helpers.create('categories', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/categories API return a status code 400 when category id is missing', async() => {
        _.unset(sample, 'id');
        const response = await helpers.create('categories', sample);
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that POST/categories API return a status code 400 when request body is empty', async() => {
        const response = await helpers.create('categories', {});
        assertions.assertBadRequestStatusCode(response);
    });
})
