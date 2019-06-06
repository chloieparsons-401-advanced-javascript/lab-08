const Products = require('../src/models/products');
const products = new Products();

const supergoose = require('./supergoose');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products model', () => {

  it('can post() a new beach', () => {
    let obj = {beach_name: 'Aquasol Beach Park', airport_code: 'MBJ', resort_name: 'Theme Park'};

    return products.post(obj)
      .then(record => {
          expect(obj.airport_code).toEqual(obj.airport_code.toUpperCase());
        })
      });
});