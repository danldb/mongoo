var Sheep = function() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var sheepSchema = new Schema({
    id: Number,
    name: String,
    brand: String 
  });

  var _model = mongoose.model('sheep', sheepSchema);

  var _findByBrand = function(brand, success, fail) {
    _model.findOne({brand:brand}, function(e, doc) {
      if (e) {
        fail(e);
      }else{
        success(doc);
      }
    });
  };

  var _spawn = function(options) {
    lamb = new _model(options)
    lamb.save(function (err) {
      console.log('saving')
      if (err) return console.log('error:' + err);
    })
  }

  return {
    schema: sheepSchema,
    model: _model,
    spawn: _spawn,
    findByBrand: _findByBrand
  };

}();

module.exports = Sheep;