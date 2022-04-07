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

        before(function(){
            return Promise
                .resolve()
                .then(function() {
                    apiResponse = chakram.get(`${apiHostUrl}/get?test=123`)
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

        before(async function(){
            apiResponse =await  chakram.post(
              `${apiHostUrl}/post`, 
              {"text": "aaa"},
              { 
                headers: {
                  "User-Agent": 'PostmanRuntime/7.26.8',
                  'content-type': 'application/json'
                }
              }
            )
        })

        it('should return 200',function(){
            expect(apiResponse).to.have.status(200)
        })

        it('should return data adhering to schema',function(){
            expect(apiResponse).joi(schema, {abortEarly: false});
        })

        // it('should return the correct response body',function(){
        //     expect(response).to.comprise.of.json({
        //       "args": {},
        //       "data": "{\n    \"text\": \"aaa\"\n}",
        //       "files": {},
        //       "form": {},
        //       "headers": {
        //           "x-forwarded-proto": "https",
        //           "x-forwarded-port": "443",
        //           "host": "postman-echo.com",
        //           "x-amzn-trace-id": "Root=1-624ef38f-27c7678037ce65dd3d12e5cf",
        //           "content-length": "21",
        //           "content-type": "text/plain",
        //           "user-agent": "PostmanRuntime/7.26.8",
        //           "accept": "*/*",
        //           "cache-control": "no-cache",
        //           "postman-token": "79cacd8c-3350-4416-95ea-71f06d82556b",
        //           "accept-encoding": "gzip, deflate, br",
        //           "cookie": "sails.sid=s%3A3_eyxFY-utnwaCYVoZHAzvB-PF7KfoaV.G3wB3AxjGDH%2FKYRLzv5AOr1ylKpJD56Ol6Iw%2BFbknYA"
        //       },
        //       "json": null,
        //       "url": "https://postman-echo.com/post"
        //   })
        // })

    })
})