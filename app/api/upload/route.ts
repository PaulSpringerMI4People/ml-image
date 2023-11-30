import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

export const config = {
  runtime: 'experimental-edge',
};

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.formData();
  if (!body) {
    return new NextResponse(JSON.stringify({ message: 'Invalid request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  const bytes = await body.get('image').arrayBuffer();
  const image = Buffer.from(bytes).toString('base64');

  const data = new FormData()
  data.append('image', image);
  const response = await axios.post('http://localhost:55011/score', data, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (response.status !== 200) {
    return new NextResponse(JSON.stringify({ message: 'Invalid request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  console.log(typeof(JSON.parse(response.data)))
  const predictions = JSON.parse(response.data);
  return new NextResponse(predictions, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
