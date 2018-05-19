import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { hotelsAPI } from '../source/_modules/fetch/fetch';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Main fetch function',  () => {
  
  describe('Smoke Test', ()=> {
    it('should exist the hotelsAPI method', () => {
      expect(hotelsAPI).to.exist;
    });

    it('should expect hotelsAPI to be a function', ()=> {
      expect(hotelsAPI).to.be.a('function');
    });
  });


  describe('Main fetch tests', ()=> {
    let fetchedStub;
    let promise;

    beforeEach(()=> {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(()=> {
      fetchedStub.restore();
    });

    it('should call fetch function', ()=> {
      const fetch = hotelsAPI();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch function with the correct URL', ()=> {
      const fetch = hotelsAPI();
      expect(fetchedStub).to.have.been
        .calledWith('https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/hotels');
    });

    it('should return an JSON from the fetch', ()=> {
      promise.resolves({body:'json'});
      const fetch = hotelsAPI();
      expect(fetch.resolveValue).to.be.eql({body: 'json'})
    });
  });



});