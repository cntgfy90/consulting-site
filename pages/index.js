import React, { Fragment } from 'react';

import BaseStyle from '../base/Styles';
import Header from '../components/Header';
import MainTitle from '../components/Main/Title';
import { Content } from '../shared/Content';
import { IntroText } from '../components/Main/Texts/IntroText';
import { OfferText } from '../components/Main/Texts/OfferText';
import { StartText} from '../components/Main/Texts/StartText';
import { ContactText } from '../components/Main/Texts/ContactText';

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
          Оставьте Вашу заявку на сайте  или звоните напрямую и получите первичную бесплатную консультацию.
        </ContactText>
      </Content>
    </Fragment>
  );
};

export default Home;
