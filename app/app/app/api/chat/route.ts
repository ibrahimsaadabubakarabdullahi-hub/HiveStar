import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: google('gemini-1.5-flash'),
    system: 'You are HiveStar, a helpful bee-themed AI assistant.',
    messages,
  });
  return result.toDataStreamResponse();
}
