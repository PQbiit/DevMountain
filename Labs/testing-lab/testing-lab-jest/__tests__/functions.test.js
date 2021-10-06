const {returnTwo,greeting,add,subtract,divide,multiply} = require('../functions');

test('returnTwo function test',() =>{
    expect(returnTwo()).toBe(2);
});

describe('greeting function tests',()=>{
    test('greeting -> James',() =>{
        expect(greeting('James')).toEqual('Hello, James');
        expect(greeting('Jill')).toEqual('Hello, Jill');
    });
    test('greeting -> Jill',() =>{
        expect(greeting('Jill')).toEqual('Hello, Jill');
    });
})

describe('Math operations', () =>{
    describe('Sum tests', () =>{
        test('Add function test: 1+2 = 3',() =>{
            expect(add(1,2)).toBe(3);
        });
        
        test('Add function test: 5+9 = 14',() =>{
            expect(add(5,9)).toBe(14);
        });
    });
    describe('Subtract tests', () =>{
        test('Subtract function test: 5-2 = 3',() =>{
            expect(subtract(5,2)).toBe(3);
        });
        test('Subtract function test: 9-4 = 5',() =>{
            expect(subtract(9,4)).toBe(5);
        });
    });
    describe('Divide tests', () =>{
        test('Divide function test: 10/2 = 5',() =>{
            expect(divide(10,2)).toBe(5);
        });
        test('Divide function test: 8/4 = 2',() =>{
            expect(divide(8,4)).toBe(2);
        });
    });
    describe('Multiply tests', () =>{
        test('Multiply function test: 7*3 = 21',() =>{
            expect(multiply(7,3)).toBe(21);
        });
        test('Multiply function test: 3*2 = 6',() =>{
            expect(multiply(3,2)).toBe(6);
        });
    });
});