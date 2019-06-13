import axios from "axios";

class AxiosHelper {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get(version) {
    return new axios.create({
      baseURL: `https://dathost.net/api/${version}`,
      auth: {
        username: this.username,
        password: this.password
      }
    });
  }
}

export default AxiosHelper