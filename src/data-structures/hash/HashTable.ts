/**
 * 해쉬테이블
 * 검색: O(1)
 * 삭제: O(1)
 * 삽입: O(1)
 * 짱 좋음 제일 좋음
 * 유니크한 해시함수를 구현하는게 핵심.
 * 파이썬의 dictionary | JS의 Object 등등 대부분 언어에 구현되어있음.
 */
import { defaultToString } from '../utils';
import { ValuePair } from '../models/value-pair';

export default class HashTable<K, V> {
  protected table: { [key: string]: ValuePair<K, V> };

  constructor(protected toStrFn: (key: K) => string = defaultToString) {
    this.table = {};
  }

  // This is not the best possible algorithm
  // but it has the merit of extreme simplicity.
  private loseloseHashCode(key: K) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  // this algorithm (k=33) was first reported by dan bernstein many years ago.
  // private djb2HashCode(key: K) {
  //   const tableKey = this.toStrFn(key);
  //   let hash = 5381;
  //   for (let i = 0; i < tableKey.length; i++) {
  //     hash = hash * 33 + tableKey.charCodeAt(i);
  //   }
  //   return hash % 1013;
  // }

  hashCode(key: K) {
    return this.loseloseHashCode(key);
  }

  put(key: K, value: V) {
    if (!key || !value) {
      return false;
    }
    const hash = this.hashCode(key);
    this.table[hash] = new ValuePair(key, value);
    return true;
  }

  get(key: K) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    return valuePair === null ? undefined : valuePair.value;
  }

  remove(key: K) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (!valuePair) {
      return false;
    }
    delete this.table[hash];
    return true;
  }

  getTable() {
    return this.table;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;
    }
    return objString;
  }
}

const ht = new HashTable();
// console.log(ht);
// console.log(ht.hashCode('a'));

// put
// ht.put('level', 1);
// ht.put('age', 22);
// ht.put('sex', 1);
// console.log(ht.get('level'));
// console.log(ht.toString());
// console.log(ht.);
