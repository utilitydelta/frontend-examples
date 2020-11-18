import { KebabLogger } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(KebabLogger('helloWorld plus')).toEqual('hello-world-plus');
  });
});
