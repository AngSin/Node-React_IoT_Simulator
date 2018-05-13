import axios from 'axios';
import { ROOT_URL } from '../constants/server';

export const GET_READINGS = "GET_READINGS";
export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";
export const SEARCH = "SEARCH";
export const UPDATE_COUNT = "UPDATE_COUNT";

export function getReadings() {
  const url = `${ROOT_URL}device/`;
  const response = axios.get(url); // no need to use async await or .then().catch() because of "redux-promise" middleware
  return {
    type: GET_READINGS,
    payload: response
  };
}

export function toggleActive(readingIndex, newValue) {
  return {
    type: TOGGLE_ACTIVE,
    meta: { readingIndex, newValue }
  }
}

export function searchReadings(searchTerm) {
  return {
    type: SEARCH,
    meta : { searchTerm }
  }
}

export function updateCount(readings) {
  let count = 0;
  readings.forEach(reading => {
    if (reading.active) count++;
  });
  return {
    type: UPDATE_COUNT,
    meta: { count }
  }
}