import { db } from "../firebase";


export default (state = 
  db.once("value").then(function(snapshot) {
    return snapshot.val();
  }, function(error) {
    console.error(error);
  })  
  , action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
     console.log(state)
      return {
       result: action.payload.result,
       pastColor: action.payload.pastColor   
      }
     default:
      return state
    }
   }