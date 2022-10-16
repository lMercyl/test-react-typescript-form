import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import TextField from './components/TextField';
import logo from './assets/logo.svg';
import arrow from './assets/arrow.svg';
import SelectField from './components/SelectField';
import { useForm, SubmitHandler } from 'react-hook-form';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 40px;
  height: 100vh;

  @media (max-width: 1040px) {
    flex-direction: column;
    height: auto;
  }
`;

const Form = styled.form`
  width: 440px;
  padding: 40px 30px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;

  @media (max-width: 576px) {
    width: 300px;
  }
`;

const Span = styled.span`
  font-family: 'Open Sans', san-serif;
  font-size: 14px;
  line-height: 150%;
  color: #353238;
`;

const FlexText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 60%;

  @media (max-width: 1040px) {
    width: 100%;

    > img {
      height: 50px;
    }
  }

  @media (max-width: 576px) {
    > img {
      height: 20px;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Open Sans', san-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #353238;
`;

const Text = styled.p`
  font-family: 'Open Sans', san-serif;
  font-size: 14px;
  line-height: 150%;
  color: #353238;
`;

const GridForm = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const FlexForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FlexList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface Inputs {
  name: string;
  phone: string;
  email: string;
  url: string;
  city: string;
  company?: string;
  recipient?: string;
  source?: string;
}

const App = () => {
  const [hide, setHide] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setDisabled(true);
    const handler = setTimeout(() => {
      console.log(JSON.stringify(data));
      setStatus(1);
    }, 2000);
  };

  React.useEffect(() => {
    if (status !== 0) {
      setDisabled(false);
    }
  }, [status]);

  return (
    <Container>
      <FlexText>
        <img height={70} src={logo} alt="Логотип Sk Design" />
        <Title>Оставьте заявку и станьте частью нашей команды</Title>
        <Text>
          Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров,
          архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера
          сделали своим призванием.
          <br />
          <br />
          Партнерство мы видим как доверительные отношения, основанные на честности реализации
          бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и
          эксклюзивной мебели.
          <br />
          <br />
          Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры жилых или
          коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия
          сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое
          предложение к Вашему проекту или изображениям.
        </Text>
      </FlexText>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {status === 0 ? (
          <FlexForm>
            <GridForm>
              <TextField
                params={register('name', { required: true, minLength: 2 })}
                name="name"
                label="Ваше имя"
                placeholder="Иван"
                error={errors.name}
              />
              <TextField
                params={register('phone', { required: true })}
                name="phone"
                label="Номер телефона"
                placeholder="+7 (000) 000-00-00"
                error={errors.phone}
              />
              <TextField
                params={register('email', { required: true, pattern: /.+@.+\..+/ })}
                name="email"
                label="E-mail"
                placeholder="example@skdesign.ru"
                error={errors.email}
              />
              <TextField
                params={register('url', { required: true, minLength: 3 })}
                name="profile"
                label="Ссылка на профиль"
                placeholder="instagram.com/skde…"
                error={errors.url}
              />
            </GridForm>
            <SelectField
              params={register('city', { required: true })}
              name="city"
              placeholder="Выберите город"
              error={errors.city}
            />
            <TextField
              params={register('company')}
              name="company"
              label="Название организации/студии"
              placeholder="SK Design"
            />
            <FlexList>
              <Text>Скрыть дополнительные поля</Text>
              <img
                onClick={() => setHide(!hide)}
                style={{ cursor: 'pointer', transform: hide ? 'none' : 'rotate(180deg)' }}
                height={6}
                src={arrow}
                alt="Кнопка доп. информации"
              />
            </FlexList>
            {hide && (
              <>
                <TextField
                  params={register('recipient')}
                  name="recipient"
                  label="Получатель"
                  placeholder="ФИО"
                />
                <SelectField
                  params={register('source')}
                  name="source"
                  placeholder="Откуда вы узнали про нас?"
                />
              </>
            )}
            <Button disabled={disabled}>Отправить заявку</Button>
          </FlexForm>
        ) : (
          <Span>Спасибо что уделили время</Span>
        )}
      </Form>
    </Container>
  );
};

export default App;
