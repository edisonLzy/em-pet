import path from 'node:path';
import fs from 'node:fs';
import { interface2config } from '../src';
describe('test ', () => {
  it('interface 2 config', () => {
    const input = fs.readFileSync(
      path.resolve(__dirname, './features/input.ts')
    );
    interface2config(input);
  });
});
