import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== 'string' || !query.trim()) {
      return NextResponse.json(
        { error: 'Valid query string required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback response if GEMINI_API_KEY is not configured
      return NextResponse.json({
        answer: `Anandam Ashiyana is an approved 12.46-acre DDJAY plotted township in Sector 36 Jhajjar (Licence 79 of 2025, HRERA-PKL-JJR-709-2025) offering 184 plot units from 72 to 179 sq. yd. with 24m/9m roads and commercial amenities.`,
        sources: [
          {
            title: 'Official HRERA Haryana Portal',
            uri: 'https://haryanarera.gov.in',
          },
        ],
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const prompt = `You are an expert real estate consultant answering questions about Anandam Ashiyana DDJAY plots in Sector 36 Jhajjar, Haryana.
Developer: Prish Realty Pvt Ltd (Prish Group)
RERA Registration: HRERA-PKL-JJR-709-2025
DTCP Licence: Licence 79 of 2025
Total Area: 12.4625 Acres | 184 Plots (72 - 179 Sq. Yd.)
Location: Sector 36 Jhajjar (Village Talao) on 24m Sector Road

User Question: "${query.trim()}"

Provide a concise, factual 2-3 sentence response directly answering the user query. Use Google Search grounding to retrieve any up-to-date regional context or verified background details if relevant.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const answer =
      response.text ||
      'Information retrieved for Anandam Ashiyana DDJAY plots in Sector 36 Jhajjar.';

    const groundingChunks =
      response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    const sources = groundingChunks
      .map((chunk: { web?: { uri?: string; title?: string } }) => chunk.web)
      .filter((web): web is { uri: string; title: string } =>
        Boolean(web && web.uri && web.title)
      );

    return NextResponse.json({ answer, sources });
  } catch (err: unknown) {
    console.error('FAQ Search Grounding Error:', err);
    return NextResponse.json(
      { error: 'AI Search Grounding unavailable. Showing local FAQ matches.' },
      { status: 500 }
    );
  }
}
