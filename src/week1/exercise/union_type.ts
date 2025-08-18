export function formatId(id: string | number): string {
    let response = ""
    
    if (typeof(id) === "string")
        response = `ID: ${id}`
    if(typeof(id) === "number")
        response= `ID: #${id}`

    // response= (typeof(id) === "string" ? `ID: ${id}`
    // response= (typeof(id) === "number" ? `ID: #${id}`
    
    return response
}