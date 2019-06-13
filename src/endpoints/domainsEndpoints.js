class DomainsEndpoints {
  constructor(axios) {
    this.axios = axios;
  }

  async get() {
    return await this.axios.get('/custom-domains');
  }
}

export default DomainsEndpoints;