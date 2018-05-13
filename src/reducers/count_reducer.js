import { GET_READINGS, TOGGLE_ACTIVE, UPDATE_COUNT } from "../actions/readings_actions";
import { store } from '../index';

export default function(state = 0, action) {
  switch(action.type) {
    case GET_READINGS: {
      let counter = 0;
      action.payload.data.data.forEach(reading => {
        if (reading.active)
          counter++;
      });
      return counter;
    }
    case TOGGLE_ACTIVE: {
      let counter = state;
      if (action.meta.newValue)
        counter++;
      else
        counter--;
      return counter;
    }
    case UPDATE_COUNT: {
      return action.meta.count;
    }
    default:
      return 0;
  }
}