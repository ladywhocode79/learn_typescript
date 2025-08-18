export function contains<T>(items: T[], item: T): boolean
 {
    
    // Returns true if the item is in the items array, otherwise false
    //Tests: Check for a number in a number[], a string in a string[], and a case where the item is not found.
    for (const num of items){
        if(num === item )
            return true
    }
  return false
}