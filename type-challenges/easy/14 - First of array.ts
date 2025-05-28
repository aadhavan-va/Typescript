/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #easy #array

  ### Question

  Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

  For example:

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > View on GitHub: https://tsch.js.org/14
*/

/* _____________ Your Code Here _____________ */


//answer1
type First<T extends any[]> = T extends [] ? never : T[0]

//answer2
type First1<T extends any[]> = T['length'] extends 0 ? never : T[0]

//answer3
type First2<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First1<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First2<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]
type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]
