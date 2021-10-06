const {add,subtract,divide,multiply,stringConcatenator} = require('../functions');

// test('Hello word',() => {
//     expect(1).toBe(1);
// });

describe('Math fuction tests',() =>{
    test('Add function should add 2 numbers',() => {
        expect(add(4,10)).toBe(14);
    });
    
    test('Subtract function should subtract 2 numbers',() => {
        expect(subtract(3,2)).toBe(1);
    });
    
    test('Divide function should divide 2 numbers',() => {
        expect(divide(6,2)).toBe(3);
    });
    
    test('Multiply function should multiply 2 numbers',() => {
        expect(multiply(2,3)).toBe(6);
    });
});



test('stringConcatenator should not return a number',() =>{
    expect(stringConcatenator('I am ','5')).not.toBeNaN();
})

test('expect stringConcatenator should return a concatenated string',() =>{
    expect(stringConcatenator('I am ','happy')).toEqual('I am happy');
});

test('references types are special', () =>{
    //compare arrays location in memory
    //expect([1,2,3]).toBe([1,2,3]);

    //compares array values
    expect([1,2,3]).toEqual([1,2,3]);
});

test('array should contain correct peaople', () =>{
    const myArr = ['Jo','Becca','Sam'];
    expect(myArr).toContain('Becca');
    expect(myArr).not.toContain('Jeddy');
});

let bankAccount = {
    balance: 1000,
    depositMoney(amount) {
      this.balance += amount;
      return this.balance;
    },
    withdrawMoney(amount) {
      this.balance -= amount;
      return this.balance;
    },
  };

  describe('Bank account methods test',()=>{
    beforeEach(() => {
        bankAccount.balance = 1000;
    });
    test('Initial balance is 1000',() =>{
        expect(bankAccount.balance).toEqual(1000);
    });
    test('Deposit money into account',() => {
        expect(bankAccount.depositMoney(100)).toEqual(1100);
    });
    test('Witdraw money from account',() => {
        expect(bankAccount.withdrawMoney(500)).toEqual(500);
    });
    afterAll(()=>{
        bankAccount.balance = 0;
    })
  });