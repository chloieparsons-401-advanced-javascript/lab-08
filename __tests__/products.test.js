const Products = require('../src/models/products');
const products = new Products();

const supergoose = require('./supergoose');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products model', () => {

  it('can post() a new beach object', () => {
    let obj = {beach_name: 'Aquasol Beach Park', airport_code: 'MBJ', resort_name: 'Theme Park'};

    return products.post(obj)
      .then(record => {
          expect(obj.beach_name).toBeDefined();
          expect(obj.airport_code).toEqual(obj.airport_code.toUpperCase());
          expect(obj.resort_name).toBeDefined();
        })
      });

    it('can get() a beach object', () => {
      let obj = {beach_name: 'Aquasol Beach Park', airport_code: 'MBJ', resort_name: 'Theme Park'};

      return products.post(obj)
        .then(record => {
          return products.get(record.id)
            .then(product => {
              expect(obj.beach_name).toBeDefined();
              expect(obj.airport_code).toEqual(obj.airport_code.toUpperCase());
              expect(obj.resort_name).toBeDefined();
          })
        })
    });

    it('can put() a beach object', () => {
      let obj = {beach_name: 'Aquasol Beach Park', airport_code: 'MBJ', resort_name: 'Secrets Wild Orchid Montego'};

      let newObj = {beach_name: 'Private Beach', airport_code: 'MBJ', resort_name: 'Theme Park'};

      return products.post(obj)
        .then(record => {
          return products.put(record.id, newObj)
            .then(updatedProduct => {
              expect(updatedProduct.beach_name).toEqual(newObj.beach_name);
          })
        })
    });
});