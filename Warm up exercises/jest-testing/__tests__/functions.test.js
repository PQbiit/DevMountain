const {fetchData, add, subtract, multiply, divide, modulo} = require('../functions')

test('Check if data came back', ()=>{
    return fetchData().then(res =>{
        expect(res.data.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    });
});

test('testing add function', ()=>{
    expect(add(2,'2')).toEqual(4);
})

test('testing subtract function', () => {
    expect(subtract(4, '2')).toEqual(2);
})

test('testing multiply function',()=>{
    expect(multiply(2,'4')).toEqual(8);
})

test('testing divide function',()=>{
    expect(divide('8','4')).toEqual(2);
})

test('testing modulo function',()=>{
    expect(modulo(22,3)).toEqual(1);
})