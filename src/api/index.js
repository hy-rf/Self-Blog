import axios from 'axios';

const url = {
  // baseurl:'https://1stbbs.azurewebsites.net'
  baseurl: 'https://localhost:7064',
};

const api = {
  async login(name, pwd) {
    const res = await axios({
      method: 'post',
      url: `${url.baseurl}/api/User/Login`,
      data: {
        Name: name,
        Pwd: pwd,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getuser(id) {
    const res = await axios({
      method: 'get',
      url: `${url.baseurl}/User/${id}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  // async getpost() {
  //   const res = await axios({
  //     method: 'post',
  //     url: `${url.baseurl}/api/User/Login`,
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     withCredentials: true
  //   });
  //   return res.data;
  // },
};

export default api;
