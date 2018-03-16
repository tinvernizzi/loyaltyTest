const chai = require('chai');

var server = 'http://localhost:8000'; //TODO : Proper import of the server

chai.use(require('chai-http'));
var should = chai.should();

before(async () => {
    // Write before all tests hooks here
});

beforeEach(async () => {
    // Write before each tests hooks here
});

afterEach(async () => {
    // Write after each all tests hooks here
});

after(async () => {
    // Write after all tests hooks here
});

describe('Blobs', function() {
    it('should return 200 when a valid request of number of rides is made on /api/riders/<id>/numberOfRides GET', function(done) {
        chai.request(server)
            .get('/api/riders/1/numberOfRides')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });
    it('should add a SINGLE ride with a price of 1 on /api/riders/<id>/rides POST');
});