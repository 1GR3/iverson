import { Client } from '@hubspot/api-client';
import { NextApiRequest, NextApiResponse } from 'next';

// Define the serverless function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { email, firstName, lastName } = req.body;

  if (!email || !firstName || !lastName) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const hubspotClient = new Client({
    accessToken: process.env.HUBSPOT_API_TOKEN, // Make sure this environment variable is correctly set
  });

  try {
    const contactData = {
      properties: {
        email,
        firstname: firstName,
        lastname: lastName,
      },
    };

    const response = await hubspotClient.crm.contacts.basicApi.create(contactData);
    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
