const request = require('supertest');
// const assert = require('assert');
const app =require('../src/app')
// const app = express();

describe('Testing pages routers and its status codes', () => {

test('testing status code 200 on home page', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if(err){
            return done(err)}

        expect(res.statusCode).toBe(200);
        done();
        })
      })
    
      test('testing status code 404 on unknown routes', (done) => {
        request(app)
          .get('/+')
          .expect(404)
          .end(function(err, res) {
            if(err){
                return done(err)}
    
            expect(res.statusCode).toBe(404);
            done();
            })
          })
        
          test('testing status code 200 on search', (done) => {
            request(app)
              .get('/search-song/imagine%20dragons')
              .expect('Content-Type', /json/)
              .expect(200)
              .end(function(err, res) {
                if(err){
                    return done(err)}
        
                expect(res.statusCode).toBe(200);
                done();
                })
              })
              test('testing status code 404 on search null', (done) => {
                request(app)
                  .get('/search-song/ ')
                  .expect(404)
                  .end(function(err, res) {
                    if(err){
                        return done(err)}
            
                    expect(res.statusCode).toBe(404);
                    done();
                    })
                  })
    
    })
