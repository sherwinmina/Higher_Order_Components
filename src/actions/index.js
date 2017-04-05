import {
  CHANGE_AUTH
} from './types';

export function authenticate(isLogedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedn
  }
}