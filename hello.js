/** @format */

const hello = () => 'HELLO WORLD!';
const globalObject = typeof window !== 'undefined' ? window : global;

globalObject.hello = hello;
