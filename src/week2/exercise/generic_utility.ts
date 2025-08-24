export class Array_Type<Type> {
// Requirements: Returns the last item of an array, or undefined if the array is empty.
// Tests: Test with a number[], a string[], and an empty array.

last<T>(items: T[]): T | undefined{
    if(items.length === 0)
        return undefined
    else
    { const item = items[items.length-1]
        return item
    }

}

}



