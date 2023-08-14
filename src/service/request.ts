const corsAnywhereUrl = 'https://cors.951142905.workers.dev/';

export function request(input: string, init?: RequestInit | undefined): Promise<Response> {
  return fetch(corsAnywhereUrl + input, init);
}