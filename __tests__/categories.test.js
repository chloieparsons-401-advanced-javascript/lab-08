const Categories = require('../src/models/categories');
const categories = new Categories();

describe('Categories Model', () => {
  
  afterEach(() => {
    categories.database = [];
  });

  it('can post() a new valid beach to the database', () => {
    let obj = {name: 'Doctor\'s Cave Beach', airport_code: 'MBJ'};

    return categories.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() all beach objects from database', () => {
    let obj = {name: 'Doctor\'s Cave Beach', airport_code: 'MBJ'};

    return categories.post(obj)
      .then(records => {
        return categories.get()
          .then(records => {
            expect(records).toBeDefined();
            expect(records.length).toBe(1);
            expect(records[0].id).toBeDefined();
            expect(records[0].name).toEqual(obj.name);
            expect(records[0].airport_code).toEqual(obj.airport_code);
          });
      });
  });

  it('can get(id) of beach object from database', () => {
    let obj = {name: 'Doctor\'s Cave Beach', airport_code: 'MBJ'};

    return categories.post(obj)
      .then(record => {
        return categories.get(record.id)
          .then(records => {
            expect(records).toBeDefined();
            expect(records.length).toBe(1);
            expect(records[0].id).toBeDefined();
            expect(records[0].name).toEqual(obj.name);
            expect(records[0].airport_code).toEqual(obj.airport_code);
          });
      });
  });

  it('can use put() to update the beach object in the database', () => {
    let obj = {name: 'Doctor\'s Cave Beach', airport_code: 'MBJ'};

    return categories.post(obj)
      .then(records => {
        return categories.put(records.id, {id: records.id, name: 'Cornwall Beach',
          airport_code: 'MBJ',  
        })
          .then(records => {
            expect(records).toBeDefined();
            expect(records.id).toBeDefined();
            expect(records.name).toEqual('Cornwall Beach');
            expect(records.airport_code).toEqual(obj.airport_code);
          });
      });
  });

  it('can use delete() to remove the beach object from the database', () => {
    let obj = {name: 'Doctor\'s Cave Beach', airport_code: 'MBJ'};

    return categories.post(obj)
      .then(records => {
        return categories.delete(records.id) 
        })            
          .then(records => {
            expect(records).toBeUndefined();
          });
  });
  
});