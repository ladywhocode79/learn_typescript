export function sum(a?: number|string, b?: number|string): number|string {
    // a || b ?  a==0 || b==0 : undefined
    if(a === undefined)
        a=0
    if(b===undefined)
        b=0
    if(typeof(a) === 'number' && typeof(b)=== 'number')
        return a + b;
  return String(a) + String(b)
}