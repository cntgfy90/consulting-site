import React from 'react';
import styled from 'styled-components';

import { FlowText } from '../../../shared/FlowText';
import { List } from '../../../shared/List';
import { ListItem } from '../../../shared/ListItem';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  max-width: 500px;
  border-radius: 2px;
`;

const Header = styled.div`
  padding: 40px 20px;
  background-color: #ea3367;
  text-align: center;
  width: 100%;
`;

const HeaderTitle = styled(FlowText)`
  font-family: 'Montserrat-Bold';
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

const Body = styled.div`
  padding: 40px 20px;
  background-color: #fff;
  text-align: center;
  height: 100%;
`;

const ListItemStyled = styled(ListItem)`
  font-family: 'Montserrat-Medium';
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid #e3e3e3;
  color: #4f4f4f;
  padding: 20px 10px;
`;

const StartPackage = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle as="h3">
          Пакет СТАРТ
        </HeaderTitle>
      </Header>
      <Body>
        <List>
          <ListItemStyled>
            Общая консультация, подбор субъекта хозяйствования и выбор оптимальной формы  налогообложения, проверка названия в реестре
          </ListItemStyled>
          <ListItemStyled>
            Подготовка Устава предприятия и всех необходимых регистрационных документов
          </ListItemStyled>
          <ListItemStyled>
            Помощь в выборе видов деятельности согласно КВЭД
          </ListItemStyled>
          <ListItemStyled>
            Предоставление документов в службу и получение Выписки с ЕГР
          </ListItemStyled>
          <ListItemStyled>
            Получение справки статистики
          </ListItemStyled>
          <ListItemStyled>
            Постановка на учет  НДС, получение вытяга
          </ListItemStyled>
        </List>
      </Body>
    </Container>
  );
};

export default StartPackage;
