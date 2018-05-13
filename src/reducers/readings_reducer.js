import { GET_READINGS, TOGGLE_ACTIVE, SEARCH } from "../actions/readings_actions";

export default function (state = [], action) {
  let newState = [...state];
  switch (action.type) {
    case GET_READINGS: {
      return action.payload.data.data;
    }
    case TOGGLE_ACTIVE: {
      newState[action.meta.readingIndex].active = !newState[action.meta.readingIndex].active;
      return newState;
    }
    case SEARCH: {
      console.log(action);
      const results = [];
      newState.forEach( reading => {
        if (reading.name.toLowerCase().includes(action.meta.searchTerm.toLowerCase()))
          results.push(reading);
      });
      return results;
    }
    default:
      return newState;
  }
}