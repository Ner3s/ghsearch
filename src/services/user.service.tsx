import { AxiosResponse } from 'axios';

import { Repo } from '~/models/Repo';
import { User } from '~/models/User';

import api from './api';

const UserService = {
  async search(data: string): Promise<User> {
    const response = await api.get(`/users/${data}`);
    return response.data;
  },

  async getAllRepos(data: string): Promise<AxiosResponse<Repo>> {
    const response = await api.get<Repo>(`/users/${data}/repos`);
    return response;
  },
};

export default UserService;
