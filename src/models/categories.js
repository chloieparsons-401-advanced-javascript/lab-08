'use strict';

//idea = name: beaches & region: caribe, east caribe, etc.

const uuid = require('uuid/v4');

const schema = {
  id: {required: true},
  name: {required: true},
  airport_code: {required: true},  
};

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let response = _id ? this.database.filter(record => record.id === _id) : this.database;
    return Promise.resolve(response);
  }
  
  post(entry) {
    entry.id = uuid();

    let record = this.sanitize(entry);
    if(!record){
      return Promise.reject('Invalid beach object provided');
    }

    this.database.push(record);

    return Promise.resolve(record);
  }


  put(_id, entry) {
    let record = this.sanitize(entry);

    if(!record) return Promise.reject('Bad record given');

    this.database = this.database.map(item => item.id === _id ? record : item);

    return Promise.resolve(record);
  }

  delete(_id) {
    this.database = this.database.filter(record => record.id !== _id);

    return Promise.resolve();
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

module.exports = Categories;
