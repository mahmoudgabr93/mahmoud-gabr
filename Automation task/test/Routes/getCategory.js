'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { category } = require('../Samples');

describe('GET/categories/{id}', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(category);
    })

    it('Check that GET/categories API returns 200 status code for existing category', async() => {
        const createdCategoryResponse = await helpers.create('categories', sample);
        const response = await helpers.getById('categories', createdCategoryResponse.body.id)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, sample)
    });

    it('Check that GET/categories API returns 404 status code when the id is not found for a category', async() => {
        const response = await helpers.getById('categories', objectId())
        assertions.assertNotFoundErrorStatusCode(response);
    });
})
