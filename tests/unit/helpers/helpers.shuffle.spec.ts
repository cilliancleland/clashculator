import { shuffle } from '@/helpers/helpers';

describe('shuffle', () => {
  it('returns a permutation of the input array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = shuffle([...arr]);
    expect(result).not.toEqual(arr);
    expect([...result].sort()).toEqual(arr);
  });

  it('does not mutate the input array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrCopy = [...arr];
    shuffle(arrCopy);
    expect(arrCopy).toEqual(arr); // Should not mutate original
  });

  it('returns an empty array when input is empty', () => {
    expect(shuffle([])).toEqual([]);
  });
});
