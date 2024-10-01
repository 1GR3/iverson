import { Client } from '@hubspot/api-client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received request:', req.method, req.url);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { email, firstName, lastName } = req.body;
  console.log('Received data:', { email, firstName, lastName });

  if (!email || !firstName || !lastName) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  if (!process.env.HUBSPOT_PRIVATE_TOKEN) {
    console.error('HUBSPOT_PRIVATE_TOKEN is not set');
    return res.status(500).json({ success: false, message: 'Server configuration error' });
  }

  const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_PRIVATE_TOKEN });

  try {
    console.log('Attempting to create contact in HubSpot');
    const contactData = {
      properties: {
        email,
        firstname: firstName,
        lastname: lastName,
      },
    };
    const response = await hubspotClient.crm.contacts.basicApi.create(contactData);
    console.log('HubSpot response:', response);
    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}