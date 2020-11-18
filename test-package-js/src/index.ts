import kebabCase from 'lodash/kebabCase';
import { HelloWorld } from 'hello-world';

let blah = HelloWorld();

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log(blah);
  }
  return a + b;
};

export const KebabLogger = (msg: string): string => {
  let kb = kebabCase(msg);
  console.log(kb);
  return kb;
};
