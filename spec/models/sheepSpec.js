var sheep = require('../../lib/sheep');
var mongoose = require('mongoose');
var chai = require('chai');
var expect = chai.expect;
mongoose.connect('mongodb://localhost/sheep_test');

describe("Sheep", function(){  

  beforeEach(function(done) {
    var siobhan = sheep.spawn({name: 'Siobhan', brand: 'badFarm'});
    done();
  })

  it("retrieves by brand", function(done){    
    sheep.findByBrand('badFarm', function(doc){
      expect(doc.brand).to.equal('badFarm');      
      // doc.email.should.equal('test@test.com');       
      done();    
    });  
  });

});