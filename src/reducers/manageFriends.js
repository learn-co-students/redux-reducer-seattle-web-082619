export function manageFriends(state, action){

  state = {
    "friends": [
            {
            "hometown": "NYC",
            "id": 100,
            "name": "Avi"
            }
        ]
  }

  switch(action.type){ 

    case 'ADD_FRIEND':
      return ({ ...state, friends: [...state.friends, action.friend] })

    case 'REMOVE_FRIEND':
      const removeIndex = state.friends.findIndex(friend => friend.id === action.id)

      return( {...state, friends: [...state.friends.slice(0, removeIndex),  ...state.friends.slice(removeIndex + 1)] } )

      default: 
        return state
  }
  


}
