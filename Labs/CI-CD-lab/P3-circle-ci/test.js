const {getGreeting, add} = require('./project');

describe('getGreeting function tests', ()=>{
  test('can create a basic greeting', () => {
    expect(getGreeting('Sam')).toBe("Hi Sam");
  });
});

describe('add function tests', () =>{
  test('adds 2 numbers (4+6 = 10)', ()=>{
    expect(add(4,6)).toEqual(10);
  });
  test('If string is provided, will parse into Int',()=>{
    expect(add('4',6)).toEqual(10);
  });
});
