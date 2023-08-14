const corsAnywhereUrl = 'https://cors.bridged.cc/';

export function request(input: string, init?: RequestInit | undefined): Promise<Response> {
  return fetch(corsAnywhereUrl + input, init);
}