/**
 open addressing은 chaining과 달리 한 버킷당 들어갈 수 있는 엔트리가 하나뿐인 해시테이블.
 해시함수로 얻은 주소가 아닌, 다른 주소에 데이터를 저장할 수 있도록 허용한다는 취지에서 open addressing이라는 이름이 붙은 것 같다.
 
 같은 해시값을 가지는 경우 어떻게 처리할까?
 probing: 해당 해시값에 밸류값이 저장되어 있므면 해당 해시값에 고정폭(예를 들면 +1, -1 ...)을 옮겨 다음 해시값에 저장한다.
 */

import { defaultToString } from '../utils';
import { ValuePair } from '../models/value-pair';
import { has } from 'lodash';

export default class HashTableLinearProbing<K, V> {
  protected table: { [key: string]: ValuePair<K, V> };

  constructor(protected toStrFn: (key: K) => string = defaultToString) {
    this.table = {};
  }

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

  hashCode(key: K) {
    return this.loseloseHashCode(key);
  }

  put(key: K, value: V) {
    if (!key || !value) return false;
    const position = this.hashCode(key);
    if (!this.table[position]) {
      this.table[position] = new ValuePair(key, value);
    } else {
      let newPosition = position + 1;
      while (this.table[newPosition]) {
        newPosition++;
      }
      this.table[newPosition] = new ValuePair(key, value);
    }
    return true;
  }

  get(key: K) {
    let position = this.hashCode(key);
    if (!this.table[position]) return undefined;

    if (this.table[position].key === key) {
      return this.table[position].value;
    } else {
      position++;
      while (this.table[position] && this.table[position].key !== key) {
        position++;
      }

      if (!this.table[position]) return undefined;
      else return this.table[position].value;
    }
  }

  // 해시충돌이 날 경우 이동해서 저장해 해시키 순서가 꼬인걸 다시 푸는 기능
  private verifyRemoveSideEffect(key: K, removedHash: number) {
    const hash = this.hashCode(key);
    let nextHash = hash + 1;
    while (this.table[nextHash]) {
      const nextKeyHash = this.hashCode(this.table[nextHash].key);
      if (nextKeyHash <= hash || nextKeyHash <= removedHash) {
        this.table[removedHash] = this.table[nextHash];
        delete this.table[nextHash];
        removedHash++;
      }
      nextHash++;
    }
  }

  remove(key: K) {
    const hash = this.hashCode(key);
    if (!this.table[hash]) {
      return false;
    }

    if (this.table[hash].key === key) {
      delete this.table[hash];
      this.verifyRemoveSideEffect(key, hash);
      return true;
    }

    let nextHash = hash + 1;
    while (this.table[nextHash] && this.table[nextHash].key !== key) {
      nextHash++;
    }
    if (this.table[nextHash] && this.table[nextHash].key === key) {
      delete this.table[nextHash];
      this.verifyRemoveSideEffect(key, nextHash);
      return true;
    } else {
      return undefined;
    }
  }

  isEmpty() {
    return Object.keys(this.table).length === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  claer() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = this.table[keys[0]].toString();
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString}, ${this.table[keys[i]].toString()}`;
    }
    return objString;
  }
}
