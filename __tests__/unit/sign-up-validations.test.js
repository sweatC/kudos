import React from 'react';
import {
    checkFirstName,
    checkLastName,
    checkEmail,
    checkPassword
} from '../../functions/sign-up-validations';

/* First Name testing */
test('the first name defined', () => {
    expect(checkFirstName("Jack")).toBe("Jack");
});
test('the first name is empty string', () => {
    expect(checkFirstName("")).toBe(false);
});
test('the first name length greater than 10', () => {
    expect(checkFirstName("Abbarughamarandarum")).toBe(false);
});

/* Last Name testing */
test('the last name defined', () => {
    expect(checkLastName("Morrison")).toBe("Morrison");
});
test('the last name is empty string', () => {
    expect(checkLastName("")).toBe(false);
});
test('the last name length greater than 15', () => {
    expect(checkLastName("Turkmediharlotart")).toBe(false);
});

/* Email testing */
test('jerry@gmail.com', () => {
    expect(checkEmail("jerry@gmail.com")).toBe("jerry@gmail.com");
});
test('jerry.gmail.com', () => {
    expect(checkEmail("jerry.gmail.com")).toBe(false);
});
test('jerry@gmailnnwecom', () => {
    expect(checkEmail("jerry@gmailnnwecom")).toBe(false);
});

/* Password testing */
test('qwerty123', () => {
    expect(checkPassword("qwerty123")).toBe(false);
});
test('Qwerty123', () => {
    expect(checkPassword("Qwerty123")).toBe("Qwerty123");
});
test('Qwerty', () => {
    expect(checkPassword("Qwerty")).toBe(false);
});
test('Qwe12', () => {
    expect(checkPassword("Qwe12")).toBe(false);
});