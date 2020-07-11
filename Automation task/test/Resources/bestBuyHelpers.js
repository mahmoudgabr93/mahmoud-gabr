'use strict';

const request = require('supertest');

module.exports = {
    create: async(endpointName, sample) => request('')
        .post(`http://localhost:3030/${endpointName}`)
        .set('Content-type', 'application/json')
        .send(sample),
    get: async(endpointName, limit=10, skip=0) => request('')
        .get(`http://localhost:3030/${endpointName}?$limit=${limit}&$skip=${skip}`),
    delete: async(endpointName, id) => request('')
        .delete(`http://localhost:3030/${endpointName}/${id}`),
    getById: async(endpointName, id) => request('')
        .get(`http://localhost:3030/${endpointName}/${id}`),
    update: async(endpointName, id, sample) => request('')
        .patch(`http://localhost:3030/${endpointName}/${id}`)
        .set('Content-type', 'application/json')
        .send(sample),
    getVersion: async() => request('').get('http://localhost:3030/version'),
    getHealthCheck: async() => request('').get('http://localhost:3030/healthcheck')
}