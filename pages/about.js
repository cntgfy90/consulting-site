import React, { Fragment } from 'react';

import BaseStyle from '../base/Styles';
import Header from '../components/Header';
import { Content } from '../shared/Content';
import { DefinitionText } from '../components/About/Texts/DefinitionText';
import { Title } from '../components/About/Title';
import { PaceText } from '../components/About/Texts/PaceText';
import { FlowText } from '../shared/FlowText';
import { List } from '../shared/List';
import { ListItem } from '../shared/ListItem';
import { GuaranteeText } from '../components/About/Texts/GuaranteeText';

const About = () => {
  return (
    <Fragment>
      <BaseStyle />
      <Header bgImage={'../static/img/img4.jpeg'} />
      <Content>
        <DefinitionText>
          Консалтинг, или другими словами, консультирование – это деятельность по консультированию руководителей,
          управленцев по широкому кругу вопросов в сфере финансовой, коммерческой, юридической и других видах
          деятельности. Цель консалтинга — помочь системе управления (менеджменту) в достижении заявленных целей.
        </DefinitionText>
        <Title>
          Почему сегодня так актуален консалтинг?
        </Title>
        <PaceText>
          Темп жизни настолько стремителен, происходят постоянные процессы обновлений и изменений.
          Юридические, бухгалтерские и другие организационные вопросы – это один из инструментов успешного функционирования Вашего бизнеса.
          Переложите это на плечи профессионалов и занимайтесь непосредственно деятельностью руководителя.
          Время – деньги! – один из девизов бизнесменов. Правильная и четкая организация своего бизнеса,
          выстраивание структуры функционирования позволит Вам  постоянно получать высокий результат.
        </PaceText>
        <Title>
          Мы гарантируем
        </Title>
        <List>
          <ListItem>1. Профессионализм</ListItem>
          <ListItem>2. Оперативность</ListItem>
          <ListItem>3. Конденфициальность</ListItem>
          <ListItem>4. Постоянную связь 24/7</ListItem>
          <ListItem>5. Соответствие цены и качества оказываемых услуг</ListItem>
        </List>
        <GuaranteeText>
          Может быть, цена наших услуг дороже в сравнении, с коллегами. НО!
          Стоимость профессиональной работы не может быть дешевой.
          Вы, как успешный бизнесмен, думаю, понимаете это. Наша команда готова к продуктивному сотрудничеству!
        </GuaranteeText>
      </Content>
    </Fragment>
  );
};

export default About;
