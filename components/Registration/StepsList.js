import React from 'react';
import styled from 'styled-components';

import { List } from '../../shared/List';
import { ListItem } from '../../shared/ListItem';

const StepsList = () => {
  return (
    <List>
      <ListItem>
        - выслушает все Ваши пожелания и намерения
      </ListItem>
      <ListItem>
        - проанализирует и обработает информацию
      </ListItem>
      <ListItem>
        - предложит самый оптимальный для Вашей деятельности вариант
      </ListItem>
      <ListItem>
        - выполнит регистрацию Вашего предприятия оперативно и профессионально
      </ListItem>
    </List>
  );
};

export default StepsList;
