export const simpleAction = (color) => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: color
    })
   }