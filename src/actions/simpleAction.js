import { db } from "../firebase";

export const add = color => async dispatch => {
    var arr = db.child('pastColor').push();
    arr.set(color);
    db.update({result: color});
};

export const completeToDo = completeToDoId => async dispatch => {
    db.remove();
};

export const simpleAction = (color) => async dispatch => {
    db.on("value", snapshot => {
        dispatch({
            type: 'SIMPLE_ACTION',
            payload: color
        })
    })
}