import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory, useParams } from 'react-router-dom';

import { IconWhiteGithub } from '~/assets/icons';
import { Repo } from '~/models/Repo';
import UserService from '~/services/user.service';

import {
  Card,
  Container,
  UserContainer,
  WrapperBack,
  WrapperCard,
  WrapperImg,
} from './styles';

const Repos: React.FC = () => {
  const { user }: any = useParams();
  const [repos, setRepos] = useState<Repo[]>();
  const handlePushAt = useCallback((data: any) => {
    return new Date(data).toLocaleDateString();
  }, []);

  useEffect(() => {
    UserService.getAllRepos(user).then((response) => {
      setRepos(response);
    });
  }, [user]);

  const repo = useMemo(
    () => (
      <WrapperCard>
        {repos?.map((item) => (
          <Card key={item.url}>
            <h2>{item.name}</h2>
            <p style={{ color: '#444' }}>{item.description}</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <p style={{ color: '#444' }}>{item.default_branch}</p>
              <p style={{ color: '#444' }}>{handlePushAt(item?.pushed_at)}</p>
            </div>
          </Card>
        ))}
      </WrapperCard>
    ),
    [handlePushAt, repos],
  );

  console.log(repos);
  return (
    <Container>
      <WrapperImg>
        <img src={IconWhiteGithub} alt="Icon" style={{ width: '15rem' }} />
        <h1>Repositórios</h1>
      </WrapperImg>

      <UserContainer />

      <WrapperBack>
        <Link to="/">
          <FiArrowLeft />
          <p>Voltar</p>
        </Link>
        <span />
      </WrapperBack>
      <WrapperCard>{repo}</WrapperCard>
    </Container>
  );
};

export default Repos;
