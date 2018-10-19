import * as firebase from 'firebase';
import { app } from '../firebase'

const database = firebase.database();

var initState =  database.ref().on('value', function (snap) {
  return snap.val()
})

export default (state = initState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
     const db = database.ref();
        var data = {
          result: action.payload,
          pastColor: [...state.pastColor, action.payload.toString()]
        }
        db.update(data)
      return {
       result: action.payload,
       pastColor: [...state.pastColor, action.payload.toString()]   
      }
     default:
      return state
    }
   }
   