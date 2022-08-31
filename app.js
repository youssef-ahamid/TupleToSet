let baseTuple;

function parseTupleIntoObjects(tuple, delimeter) {
    tuple = tuple.substring(1, tuple.length - 1) // REMOVE ANGLE BRACKETS
    tuple = tuple.split(delimeter) // TRANSFORM TUPLE INTO ARRAY
    return tuple
}

function nextTuple(tuple, object, delimeter) {
    // removes the first object and its delimeter
    let charactersToRemove = object.length + delimeter.length
    return tuple.substring(0, 1) + tuple.substring(1 + charactersToRemove)
} 

function getSetFromNTuple(tuple, delimeter = ",") {
    const objects = parseTupleIntoObjects(tuple, delimeter); 

    if (objects.length === 1) 
        return `{${parseTupleIntoObjects(baseTuple, delimeter).slice(-2).join(", ")}}` 
        // The tuple <an> is {x, y} where x & y are the last 2 elements of the tuple

    const next = nextTuple(tuple, delimeter, objects[0])

    return `{{${objects[0]}}, ${getSetFromNTuple(next, delimeter)}}` // recursively solve the next set (remaining tuple elements)
}

document.getElementById("submit").addEventListener('click', () => {
    baseTuple = document.getElementById("tuple").value
    document.getElementById("result").textContent = getSetFromNTuple(baseTuple)
})
