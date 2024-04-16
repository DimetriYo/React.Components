import { http, HttpResponse } from 'msw';
import { BASE_URL, ROOT_ENDPOINT } from '../constants';
import { TCharacter } from '../types';
import { testedCharacter } from './testedCharacter';

const url = new URL(`${ROOT_ENDPOINT}/12345`, BASE_URL);
console.log(url.toString());

export const handlers = [
  http.get(url.toString(), () => {
    return HttpResponse.json<TCharacter>(testedCharacter);
  }),
];
