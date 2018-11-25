import React from 'react';
import styled from 'styled-components';

import { List } from '../../shared/List';
import { ListItem } from '../../shared/ListItem';

const ListItemStyled = styled(ListItem)`
  margin-bottom: 15px;

  ${List} {
    ${ListItemStyled} {
      margin-left: 30px;
      ${List} {
        ${ListItemStyled} {
          margin-left: 30px;
        }
      }
    }
  }
`;

const ProcedureList = () => {
  return (
    <List>
      <ListItemStyled>
        1. Общая консультация, подбор группы субъекта хозяйствования, выбор оптимальной формы  налогообложения (как правило, это единый налог
      </ListItemStyled>
      <ListItemStyled>
        2. Помощь в выборе видов деятельности согласно КВЭД
      </ListItemStyled>
      <ListItemStyled>
        3.Регистрация ФОП:
        <List>
          <ListItemStyled>
            - осуществляется по месту регистрации
          </ListItemStyled>
          <ListItemStyled>
            - от Вас потребуется единожды визит к нотариусу с паспортом и кодом
          </ListItemStyled>
          <ListItemStyled>
            - В течении 3-х дней вы получите:
            <List>
              <ListItemStyled>
                *Выписку з ЕДР
              </ListItemStyled>
              <ListItemStyled>
                * Заявление о подаче регистрации книги Учета Доходов и Расходов
              </ListItemStyled>
              <ListItemStyled>
                * Письмо о подаче регистрации Вас в качестве ФОП в органах ДПИ
              </ListItemStyled>
            </List>
          </ListItemStyled>
        </List>
      </ListItemStyled>
    </List>
  );
};

export default ProcedureList;
