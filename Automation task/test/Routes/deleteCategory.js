'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const { assertions, helpers} = require('../Resources');
const { category } = require('../Samples');

describe('Delete/categories', () => {
    let sample;

    beforeEach(() => {
        sample = _.cloneDeep(category);
    })

    it('Check that DELETE/categories API returns 200 status code for existing category', async() => {
        await helpers.create('categories', sample);
        const deletedCategoryResponse = await helpers.delete('categories', sample.id)
        assertions.assertSuccessStatusCode(deletedCategoryResponse);
        assertions.assertResponseBody(deletedCategoryResponse, sample)
    });

    it('Check that DELETE/categories API returns 404 status code when the id is not found for a category', async() => {
        const deletedCategoryResponse = await helpers.delete('categories', objectId())
        assertions.assertNotFoundErrorStatusCode(deletedCategoryResponse);
    });
})
