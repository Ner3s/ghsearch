import React, { useEffect } from 'react';

import { User } from '~/models/User';

import { Container, ContainerDetails, Image, Text } from './styles';

interface IUserCard {
  user: User;
}

/**
 *
 * @param user
 * name
 * login
 * bio
 * location
 * public_repos
 *
 */

const UserCard: React.FC<IUserCard> = ({ user, children }) => {
  return (
    <>
      <Container>
        <Image src={user.avatar_url} />
        <ContainerDetails>
          <Text
            textAlign="center"
            fontSize={2.5}
            fontWeight="600"
            margin="1rem 0 0.2rem"
            color="#fff"
          >
            {user.name}
          </Text>
          {/* <Text
          textAlign="center"
          fontSize={1.5}
          fontWeight="400"
          margin="0.2rem 0"
          color="#fff"
        >
          {user.login}
        </Text> */}
          <Text
            textAlign="center"
            fontSize={1.5}
            fontWeight="400"
            margin="0.2rem 0"
            color="#fff"
          >
            {user.location}
          </Text>
          <Text
            textAlign="justify"
            fontWeight="400"
            fontSize={1.5}
            margin="0.8rem 0"
            color="#fff"
          >
            {user.bio}
          </Text>
        </ContainerDetails>
      </Container>
      {children}
    </>
  );
};

export default UserCard;
