export async function onRequest() {
  const data = await (await fetch('https://weibo.com/ajax/side/hotSearch')).json();

  const responseBody = {
    message: "success",
    data: {
      time: Date.now(),
      data,
    }
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
    }
  })
}