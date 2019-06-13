class ServersEndpoints {
  constructor(axios) {
    this.axios = axios;
  }

  async get() {
    return await this.axios.get('/game-servers');
  }
}

export default ServersEndpoints;