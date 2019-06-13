class ServerEndpoints {
  constructor(axios, serverId) {
    this.axios = axios;
    this.serverId = serverId;
  }

  async get() {
    return await this.axios.post(`/game-servers/${this.serverId}`, {

    });
  }

  async get() {
    return await this.axios.get(`/game-servers/${this.serverId}`);
  }
}

export default ServerEndpoints;