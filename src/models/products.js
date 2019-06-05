'use strict';

const schema = require('./products-schema.js');

class Products {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return schema.find(queryObject);
  }
  
  getBeachByName(name){
    let queryObject = {name};
    return schema.find(queryObject);
  }
  post(entry) {
    let record = new schema(entry);
    return record.save();
  }

  put(_id, record) {
    return schema.findByIdAndUpdate(_id, record, {new:true});
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }

  sanitize(entry) {
    let valid = true;
    let record = {};

    Object.keys(schema).forEach(beach => {
      if(schema[beach].required){
        if(entry[beach]) {
          record[beach] = entry[beach];

        } else {
            valid = false;
        }
      } else {
        record[beach] = entry[beach];
      }
    });

    return valid ? record : undefined;
  }

}

module.exports = Products;
