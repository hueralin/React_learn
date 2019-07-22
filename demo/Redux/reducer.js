export default function Reducer(state={count: 0}, action) {
    switch(action.type) {
        case "ADD": return Object.assign({}, state, {
            count: ++state.count
        });break;
        case "SUB": return Object.assign({}, state, {
            count: --state.count
        });break;
        default: return state;
    }
}