export class C {
  _length = 0;

//   TypeScript has some special inference rules for accessors:

// If get exists but no set, the property is automatically readonly
// If the type of the setter parameter is not specified, it is inferred from the return type of the getter

  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

export class Thing {
  _size = 0;
 
  get size(): number {
    return this._size;
  }
 //it is possible to have accessors with different types for getting and setting.
  set size(value: string | number | boolean) {
    let num = Number(value);
 
    // Don't allow NaN, Infinity, etc
 
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
 
    this._size = num;
  }
}
