import axios from 'axios';

export default class PostService {
  // eslint-disable-next-line consistent-return
  static async getAll() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return response.data;
  }
}
