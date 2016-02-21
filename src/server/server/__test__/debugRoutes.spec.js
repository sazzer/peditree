import {expect} from 'chai';
import {buildServer} from '..';
import request from 'supertest-as-promised';

describe('/api/debug/info', function() {
    let response = request(buildServer())
        .get('/api/debug/info')
        .then((res) => res); // If you don't do this, the response can only be used once

    it('Should work', function() {
        return response.then((res) => {
            expect(res.statusCode).to.equal(200);
        });
    });
    it('Should return the correct content type', function() {
        return response.then((res) => {
            expect(res.type).to.equal('application/json');
        });
    });
    it('Should return the correct payload', function() {
        return response.then((res) => {
            expect(res.body).to.have.property('name', 'peditree');
            expect(res.body).to.have.property('version', '1.0.0');
            expect(res.body).to.have.property('description');
        });
    });
});
