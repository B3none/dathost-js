import AxiosHelper from './helpers/axiosHelper';
import AccountEndpoints from './endpoints/acountEndpoints';
import ServerEndpoints from "./endpoints/serverEndpoints";
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

  server() {
    return new ServerEndpoints(this.axiosHelper);
  }
}

export default Dathost;