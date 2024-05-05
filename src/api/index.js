import axios from "axios";

const url = {
  baseurl:'https://1stbbs.azurewebsites.net'
}

const api = {
  async login(name, pwd) {
    const res = await axios({
      method: 'post',
      url: `${url.baseurl}/api/User/Login`,
      data: {
        "Name": name,
        "Pwd": pwd,
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    return res.data;
  },
};

export default api