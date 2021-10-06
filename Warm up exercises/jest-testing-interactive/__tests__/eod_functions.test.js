const { fetchData } = require("../eod_functions");

describe('Test if jest is hooked up',() =>{
    test('Hello world',()=>{
        expect(2).toBe(2);
    })
});


describe('Number comparisons', () =>{
    test('Larger than',()=>{
        expect(8).toBeGreaterThan(2);
    });
})

describe('misc',()=>{
    test('misc',()=>{
        expect(null).toBeNull();
    })
    test('misc',()=>{
        expect('hi').not.toBeNull();
    })
    test('truthy',()=>{
        expect(' ').not.toBeFalsy();
    })
});

describe('Axios request', () =>{
    test('request', ()=>{
        return fetchData().then(res =>{
            expect(res.data.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        });
    }); 
});

