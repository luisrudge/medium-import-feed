import axios from 'axios';

export default async () => {
  const {data} = await axios.get('https://api.medium.com/v1/me');
  return data.data;
};
