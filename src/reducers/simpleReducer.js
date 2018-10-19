
const initState = {result: '#fcfcfc', pastColor: []}

export default (state = initState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload,
       pastColor: [...state.pastColor, action.payload.toString()]   
      }
     default:
      return state
    }
   }