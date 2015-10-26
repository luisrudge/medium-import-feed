import axios from 'axios';

export default async ({id}, story) => {
  const {data} = await axios.post(`https://api.medium.com/v1/users/${id}/posts`, story);
  return data.data;
};
