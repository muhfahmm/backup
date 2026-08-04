export async function GET() {
  return Response.json({
    status: 'ok',
    message: 'tourism-data endpoint available',
    data: [],
  });
}
