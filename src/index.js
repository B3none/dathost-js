import AxiosHelper from './helpers/axiosHelper';
import AccountEndpoints from './endpoints/acountEndpoints';
import ServerEndpoints from "./endpoints/serverEndpoints";
import ServersEndpoints from "./endpoints/serversEndpoints";
import DomainsEndpoints from './endpoints/domainsEndpoints';

class Dathost {
  constructor(username, password) {
    if (!username) {
      throw new Error('Please pass a username to the Dathost class.');
    }

    if (!password) {
      throw new Error('Please pass a password to the Dathost class.');
    }

    this.axiosHelper = new AxiosHelper(username, password);
  }

  account() {
    return new AccountEndpoints(this.axiosHelper);
  }

  domains() {
    return new DomainsEndpoints(this.axiosHelper);
  }

  /**
   * Endpoints to do with a single server
   *
   * @returns {ServerEndpoints}
   */
  server(serverId) {
    return new ServerEndpoints(this.axiosHelper, serverId);
  }

  /**
   * Endpoints to do with multiple servers.
   *
   * @returns {ServersEndpoints}
   */
  servers() {
    return new ServersEndpoints(this.axiosHelper);
  }
}

export default Dathost;