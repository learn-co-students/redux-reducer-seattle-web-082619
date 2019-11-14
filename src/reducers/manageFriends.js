const initialState = { friends: [] }
export function manageFriends (state = initialState, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      // const newFriends = state.friends.filter(friend => friend.id !== action.id)
      return { ...state, friends: state.friends.filter(friend => friend.id !== action.id) }
    default:
      return state
  }
}
