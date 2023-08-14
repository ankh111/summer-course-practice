const corsAnywhereUrl = 'https://cors.deeptime.workers.dev/';

export function request(input: string, init?: RequestInit | undefined): Promise<Response> {
  return fetch(corsAnywhereUrl + input, init);
}