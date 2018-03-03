const expect = require('chai').expect;

const findUserByID = (id) => {
  return clients.find((client) => client.id === id);
};

describe('User Helper', () => {
  it('should return user details when id is given as argument', () => {
    clients = [{
      id: 1,
      name: 'user1',
      message: 'msg1'
    }, {
      id: 2,
      name: 'user2',
      message: 'msg2'
    }];
    const expectedResult = {
      id: 1,
      name: 'user1',
      message: 'msg1'
    };
    expect(findUserByID(1)).to.deep.equals(expectedResult);
  });
});