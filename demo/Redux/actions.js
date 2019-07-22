export function add(val) {
    return {
        type: "ADD",
        value: val || ''
    }
}

export function sub(val) {
    return {
        type: "SUB",
        value: val || ''
    }
}