import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://zenquotes.io/api/today');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from zenquotes.io' });
  }
}