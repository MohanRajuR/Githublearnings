import {test} from '@playwright/test';

test('My first test', ()=> {
    console.log('This is my first test');
});


test('My Second test', ()=> {
    console.log('This is my second test');
});

getByRole('link', { name: 'Sign in' })