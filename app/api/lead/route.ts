import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, plotSize, source, page, timestamp, utm } = body;

    // Log the lead payload on server console
    console.log('[LEAD RECEIVED]', {
      name,
      email,
      phone,
      plotSize: plotSize || 'Not specified',
      source: source || 'Direct',
      page: page || '/',
      timestamp: timestamp || new Date().toISOString(),
      utm: utm || {},
    });

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Lead received successfully. Connecting with consultant...',
      data: { name, email, phone },
    });
  } catch (error) {
    console.error('[LEAD SUBMISSION ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing lead' },
      { status: 500 }
    );
  }
}
