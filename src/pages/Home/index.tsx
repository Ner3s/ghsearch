import React, { useCallback, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiSearch, FiGithub } from 'react-icons/fi';
import * as Yup from 'yup';

import { IconWhiteGithub, IconWhiteWave } from '~/assets/icons';
import { Button, InputButton } from '~/components';
import UserCard from '~/components/UserCard';
import { User } from '~/models/User';
import UserService from '~/services/user.service';
import getValidationErrors from '~/utils/getValidationErrors';

import { Container, ContainerUser, ImageAbsolute, TextIcon } from './styles';

interface FormProps {
  search: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();

  const handleSubmit = useCallback(async (data: FormProps) => {
    setLoading(true);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        search: Yup.string().required('Pesquisar é obrigatório.'),
      });

      await schema.validate(data, { abortEarly: false });

      await UserService.search(data.search).then((response) => {
        console.log(response);
        setUser(response);
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
        return;
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <ImageAbsolute id="github" src={IconWhiteGithub} top={5} left={10} />
      <ImageAbsolute src={IconWhiteWave} bottom={0} left={0} />
      <Form onSubmit={handleSubmit} ref={formRef}>
        <InputButton width={35} name="search" placeholder="Buscar usuário">
          <Button
            onClick={() => {
              formRef.current?.submitForm();
            }}
            width={6}
            size="5"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <FiSearch color="#232323" size={22} />
          </Button>
        </InputButton>
      </Form>
      <ContainerUser>
        {!!user && (
          <UserCard user={user}>
            <Button
              width={0}
              size="5"
              style={{
                width: '100%',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
            >
              <TextIcon>
                Ver repositórios &nbsp;
                <FiGithub color="#232323" size={30} />
              </TextIcon>
            </Button>
          </UserCard>
        )}
      </ContainerUser>
    </Container>
  );
};

export default Home;
