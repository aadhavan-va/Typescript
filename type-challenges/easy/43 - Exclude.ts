/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in `Exclude<T, U>`

  > Exclude from `T` those types that are assignable to `U`

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type arr = 'a' | 'b' | 'c' 

type cases = [
  Expect<Equal<MyExclude<arr, 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<arr, 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
