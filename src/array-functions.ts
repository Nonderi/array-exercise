/*
 * This file contains list of lodash like array functions to be implemented
 * While implementing these functions, don't use any native arrays methods (except spread operator, 'push', 'pop', 'unshift' and 'shift')
 * See array method documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * */

type ForEachFunction<T> = (item: T, index: number, arr: T[]) => void;
export function forEach<T>(arr: T[], callback: ForEachFunction<T>) {
  // Prefilled example
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    callback(item, i, arr);
  }
}

type SomeFunction<T> = (item: T, index: number, arr: T[]) => boolean;
export function some<T>(arr: T[], callback: SomeFunction<T>): boolean {
  // Prefilled example
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item, i, arr)) {
      return true;
    }
  }
  return false;
}

type EveryFunction<T> = (item: T, index: number, arr: T[]) => boolean;
export function every<T>(arr: T[], callback: EveryFunction<T>): boolean {
  // TODO return true if every item in 'arr' return true when invoked with 'callback', otherwise return false
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item, i, arr)) {
      continue;
    }
    return false;
  }
  return true;
}

type FindFunction<T> = (item: T, index: number, arr: T[]) => boolean;
export function find<T>(arr: T[], callback: FindFunction<T>): T | undefined {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item, i, arr)) {
      return item;
    }
  }
  return undefined;
}

type FindIndexFunction<T> = (item: T, index: number, arr: T[]) => boolean;
export function findIndex<T>(arr: T[], callback: FindIndexFunction<T>): number {
  // TODO return index of first item in 'arr' that returns true when invoked with 'callback', otherwise return -1
  let i = 0;
  for (const x in arr) {
    const x = arr[i];
    if (callback(x, i, arr)) {
      return i;
    }
    i++;
  }
  return -1;
}

type FilterFunction<T> = (item: T, index: number, arr: T[]) => boolean;
export function filter<T>(arr: T[], callback: FilterFunction<T>): T[] {
  const acc: T[] = [];
  // TODO return list of all items in 'arr' that return true when invoked with item
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item, i, arr)) {
      acc.push(item);
    }
  }
  return acc;
}

type MapFunction<T, R> = (item: T, index: number, arr: T[]) => R;
export function map<T, R>(arr: T[], callback: MapFunction<T, R>): R[] {
  const acc: R[] = [];
  // TODO collect and map all items in 'arr' to type R by invoking 'callback'
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const valueR = callback(item, i, arr);
    acc.push(valueR);
  }
  return acc;
}


type FlatMapFunction<T, R> = (item: T, index: number, arr: T[]) => R[] | R;
export function flatMap<T, R>(arr: T[], callback: FlatMapFunction<T, R>): R[] {
  const acc: R[] = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const valueR = callback(item, i, arr);
    if(Array.isArray(valueR)) {
      acc.push(...valueR);
    }
    else {
      acc.push(valueR);
    }
  }
  return acc;
}

export function reverse<T>(arr: T[]): T[] {
  // TODO return 'arr' in reverse order using forloop (this operation should be mutable)
  const length = arr.length;
  for (let i = arr.length - 1, j = 0; j < i; i--, j++) {
    const item = arr[j];
    arr[j] = arr[i];
    arr[i] = item;
  }

  return arr;
}

// TODO:

// Reduce not done: 1/2 tests pass
type ReduceFunction<T, R> = (acc: R, item: T, index: number, arr: T[]) => R;
export function reduce<T, R>(
  arr: T[],
  callback: ReduceFunction<T, R>,
  initialValue: R
): R {
  const acc: R = initialValue;
  // TODO accumulate 1 result in forloop using 'callback'
  return acc;
}

export function slice<T>(arr: T[], start = 0, end = arr.length): T[] {
  const acc: T[] = [];
  /* TODO
        - return a new array using forloop, that consists of items between start and end
        - negative integers for start and end should be interpreted as (n)th from the tail of the list (for example (-1) means last and (-2) means second last index, etc.)
        - if start item is before end item return empty list
    */
  return acc;
}

export function splice<T>(
  arr: T[],
  start = 0,
  deleteCount = arr.length - start,
  ...items: T[]
): T[] {
  // TODO See splice documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  return [];
}
