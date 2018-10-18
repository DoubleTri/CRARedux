const initState = 'here is the initial state....'

export default (state = initState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload 
      }
     default:
      return state
    }
   }