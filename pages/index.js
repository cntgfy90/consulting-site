import React, { Fragment } from 'react';

import BaseStyle from '../base/Styles';
import Header from '../components/Header';
import MainTitle from '../components/Main/Title';
import { Content } from '../shared/Content';
import { IntroText } from '../components/Main/Texts/IntroText';
import { OfferText } from '../components/Main/Texts/OfferText';
import { StartText} from '../components/Main/Texts/StartText';
import { ContactText } from '../components/Main/Texts/ContactText';
import ContactLink from '../components/Main/Links/ContactLink';
import { ServiceContainer } from '../components/Main/ServiceContainer';
import { ServiceGroup } from '../components/Main/ServiceGroup';
import Service from '../components/Main/Service';

const Home = () => {
  return (
    <Fragment>
      <BaseStyle />
      <Header bgImage={'../static/img/img7.jpeg'} />
      <Content>
        <MainTitle>
          Вас приветствует консалтинговая компания «AVG».
        </MainTitle>
        <IntroText>
          Каждый успешный человек в определенный период жизни приходит к мысли о создании самостоятельного бизнеса.
          И стоит на распутье: делать все самому или найти ресурс для выполнения организационных вопросов.
        </IntroText>
        <OfferText>
          Наша компания предлагает Комплекс юридических и бухгалтерских услуг для малого и среднего бизнеса.
        </OfferText>
        <StartText>
          - С Чего Начать?
        </StartText>
        <StartText>
          - Начните с Главного!
        </StartText>
        <ContactText>
          Оставьте Вашу
          <ContactLink href="/contact">{' заявку '}</ContactLink>
          на сайте или
          <ContactLink href="/contact">{' звоните '}</ContactLink>
          напрямую и получите первичную бесплатную консультацию.
        </ContactText>
        <MainTitle as="h2">
          Наши услуги
        </MainTitle>
        <ServiceContainer>
          <ServiceGroup>
            <Service
              icon={'../static/img/services/consult.jpg'}
            >
              Консультирование по организации субъекта хозяйственной деятельности с учетом специфики Вашего направления
            </Service>
            <Service
              icon={'../static/img/services/law.jpg'}
            >
              Полное юридическое сопровождение при регистрации Вашей компании
            </Service>
          </ServiceGroup>
          <ServiceGroup>
            <Service
              icon={'../static/img/services/changes.jpg'}
            >
              Внесение изменений в Уставные документы организации при необходимости
            </Service>
            <Service
              icon={'../static/img/services/service.jpg'}
            >
              Бухгалтерское обслуживание предприятий: полное или частичное, в зависимости от желания клиента
            </Service>
          </ServiceGroup>
          <ServiceGroup>
            <Service
              icon={'../static/img/services/tax.jpg'}
            >
              Оптимизация налогообложения с учетом специфики деятельности предприятия и в соответствии с законодательством Украины
            </Service>
            <Service
              icon={'../static/img/services/finish.jpg'}
            >
              Сопровождение при ликвидации предприятия
            </Service>
            </ServiceGroup>
        </ServiceContainer>
      </Content>
    </Fragment>
  );
};

export default Home;
