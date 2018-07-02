const config = require('config'),
chakram = require('chakram'),
Promise = require('bluebird'),
schema = require('../schemas/example.js'),
dataFactory = require('../helper/common.js'),
Chance = require('chance'); 

let expect = chakram.expect,
chance = new Chance(),
apiHostUrlv1 = config.get('apiHostUrl'),
timeoutLength = config.get('timeoutLength'),
apiResponse;

describe('',function(){
    this.timeout(timeoutLength);
    chakram.addMethod('joi', require('chakram-joi'));

    describe('Get',function(){

        let params = exampleParam

        before(function(){
            return Promise
                .resolve()
                .then(function() {
                    apiResponse = chakram.get(apiHostUrlv1 + params)
                    return apiResponse;
                })
        });

        it('should return 200 on success', function(){
            expect(apiResponse).to.have.status(200);

            return chakram.wait();
        });

        it('should return data adhering to schema', function() {
            expect(apiResponse).joi(schema, {abortEarly: false});
            return chakram.wait();
        });
    });
})