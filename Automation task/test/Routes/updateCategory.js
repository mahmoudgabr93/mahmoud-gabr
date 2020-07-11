'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { category } = require('../Samples');

describe('PATCH/categories/{id}', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(category);
        _.set(sample, 'id', objectId().toHexString())
    });

    it('Check that PATCH/categories API updates category name', async() => {
        const createdcategoryResponse = await helpers.create('categories', sample);
        const updatedSample = _.set(sample, 'name', 'test');
        console.log(createdcategoryResponse.body)
        const response = await helpers.update('categories', createdcategoryResponse.body.id, updatedSample)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response, _.set(updatedSample, 'updatedAt', response.body.updatedAt))
    });


    it('Check that PATCH/categories API returns 404 status code when the id is not found for a category', async() => {
        const response = await helpers.update('categories', objectId(), sample)
        assertions.assertNotFoundErrorStatusCode(response);
    });
})
