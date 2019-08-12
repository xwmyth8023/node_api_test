const config = require('config'),
chakram = require('chakram'),
Promise = require('bluebird'),
schema = require('../schemas/schema.js'),
dataFactory = require('../helper/dataFactory'),
Chance = require('chance'); 

let expect = chakram.expect,
chance = new Chance(),
apiHostUrl = config.get('apiHostUrl'),
timeoutLength = config.get('timeoutLength'),
apiResponse;

describe('',function(){
    console.log(apiHostUrl)
    this.timeout(timeoutLength);
    chakram.addMethod('joi', require('chakram-joi'));

    describe('Get',function(){

        let params = 'exampleParam'

        before(function(){
            return Promise
                .resolve()
                .then(function() {
                    apiResponse = chakram.get(`${apiHostUrl}/${params}`)
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

    describe('Post',function(){
        let token
        let postbody = dataFactory.payload

        before(async function(){
            token = await token.getToken()
            apiResponse = chakram.post(`${apiHostUrl}/path`, postbody, { headers: {'content-type': 'application/json'}})
        })

        it('should return 200',function(){
            expect(apiResponse).to.have.status(200)
        })

        it('should return data adhering to schema',function(){
            expect(apiResponse).joi(schema, {abortEarly: false});
        })

        it('should return the correct response body',function(){
            expect(response).to.comprise.of.json({

            })
        })

    })
})