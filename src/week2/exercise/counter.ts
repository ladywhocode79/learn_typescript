

export class Counter{
  num=0;

  increment ():number{
    return this.num+1
  }

  decrement ():number{
    
    return this.num-1
  }

  getValue():number{
    return this.num
}
}