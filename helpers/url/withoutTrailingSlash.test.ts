/*
 * This program is under the terms of the GNU Affero General Public License version 3
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { expect, test, describe } from "bun:test";
import { withoutTrailingSlash } from './withoutTrailingSlash';

describe('withoutTrailingSlash', () => {
  test('should return undefined if input is undefined', () => {
    expect(withoutTrailingSlash(undefined)).toBe(undefined)
  });
  test('should return null if input is null', () => {
    expect(withoutTrailingSlash(null)).toBe(null)
  });
  test('should remove trailing slash if present', () => {
    expect(withoutTrailingSlash('foo/')).toBe('foo')
  });
  test('should do nothing if input is an empty string', () => {
    expect(withoutTrailingSlash('')).toBe('')
  });
  test('should do nothing if input does not have a trailing slash', () => {
    expect(withoutTrailingSlash('text-without-slash')).toBe(
      'text-without-slash',
    )
  });
  test('should remove last slash if input is a string of slashes', () => {
    expect(withoutTrailingSlash('/////////')).toBe('////////')
  });
  test('should return an empty string if input is a single slash', () => {
    expect(withoutTrailingSlash('/')).toBe('')
  });
});
