export default async function request<T = never>(input: string, init?: RequestInit | undefined): Promise<{
  data: T;
  message: string;
}> {
  const res = await fetch(input, init);
  return await res.json();
}