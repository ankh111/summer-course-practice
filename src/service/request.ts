const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

export function request(input: string, init?: RequestInit | undefined): Promise<Response> {
  return fetch(corsAnywhereUrl + input, init);
}