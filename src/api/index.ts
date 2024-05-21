import axios from 'axios';
import { PostListViewModel } from '../types/PostListViewModel';
import { PostDetailViewModel } from '../types/PostDetailViewModel';
import CreatePostViewModel from '@/types/CreatePostViewModel';
const url = {
  baseurl:
    new RegExp('https://hy-rf.github.io*').test(window.location.href) ||
    new RegExp(
      'https://victorious-cliff-0fe836900.5.azurestaticapps.net*'
    ).test(window.location.href)
      ? 'https://1stbbs.azurewebsites.net'
      : 'https://localhost:7064',
};
const BASE_URL = url.baseurl;
const api = {
  async login(name: number, pwd: number) {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/User/Login`,
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
  async register(registerFormInfo: any) {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/User/Signup`,
      data: registerFormInfo,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getself() {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/User`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
      },
      withCredentials: true,
    });
    return res.data.payload;
  },
  async getuser(id: number) {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/User/${id}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getJoinedChatroom() {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/GetJoinedChatRoom`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getChatroomMember(ChatRoomId: number) {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/ChatRoomMember/${ChatRoomId}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return res.data;
  },
  async getChatroomMessage(ChatroomId: number) {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/GetChatRoomMessages`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        chatRoomId: ChatroomId.toString(),
      },
      withCredentials: true,
    });
    return res.data.payload;
  },
  async checkDuplicatedName(name: string) {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/User/CheckDuplicatedName`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        Name: name,
      },
    });
    return res.data;
  },
  async getPosts(): Promise<PostListViewModel[]> {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/post`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return res.data.payload;
  },
  async getPostDetail(id: number): Promise<PostDetailViewModel> {
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}/post/detail`,
      params: {
        id: id,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return res.data.payload;
  },
  async createPost(newPost: CreatePostViewModel) {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/post`,
      data: newPost,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
      },
    });
    return res.data;
  },
  async editPost(id: number, newPost: CreatePostViewModel) {
    const res = await axios({
      method: 'put',
      url: `${BASE_URL}/post`,
      params: {
        id: id,
      },
      data: newPost,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
      },
    });
    return res.data;
  },
};

export { api, BASE_URL };
