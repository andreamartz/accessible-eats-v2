import axios from 'axios';

// TODO: Remove BASE_URL in production
const BASE_URL = 'http://localhost:5000';

/** API class 
 *
 * Class with static methods for the purpose of getting data from and sending 
 * data to the server.
*/
class Api {
  static async request(endpoint, data = {}, method='get') {
    const url = `${BASE_URL}/${endpoint}`;
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.log(err);
    }
  }

  /*********************************
   * Auth methods
   *********************************/
 
  static async login(data) {
    const res = await this.request('login', data, 'post');
    return res;
  }
}

export default Api;