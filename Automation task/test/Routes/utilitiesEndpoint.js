'use strict';

const _ = require('lodash');

const { assertions, helpers} = require('../Resources');
const expect = require('../Resources/chai').expect;

describe('GET/utilities', () => {
    it('Check that GET/version API returns 200 status code', async() => {
        const response = await helpers.getVersion();
        assertions.assertSuccessStatusCode(response);
        expect(response.body).to.contain.keys('version')
    });

    it('Check that GET/healthcheck API returns 200 status code', async() => {
        const response = await helpers.getHealthCheck();
        assertions.assertSuccessStatusCode(response);
        expect(response.body).to.contain.keys(['uptime', 'readonly', 'documents']);
        expect(response.body.documents).to.contain.keys(['products', 'stores', 'categories']);
    });
});
