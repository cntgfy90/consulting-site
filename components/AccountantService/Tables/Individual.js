import React from 'react';
import styled from 'styled-components';

import Table from '../../Table';
import TableHead from '../../Table/TableHead';
import TableRow from '../../Table/TableRow';
import TableHeadItem from '../../Table/TableHeadItem';
import TableBody from '../../Table/TableBody';
import TableData from '../../Table/TableData';
import TableText from './TableText';

const TableStyled = styled(Table)`
  margin-bottom: 30px;
`;

const TableHeadItemStyled = styled(TableHeadItem)`
  border-bottom: 1px solid #e3e3e3;
`;

const TableHeadItemText = styled(TableText)`
  font-family: 'Montserrat-Medium';
  font-weight: 500;
  color: #4f4f4f;
  text-align: center;
`;

const TableDataStyled = styled(TableData)`
  text-align: center;
`;

const IndividualTable = () => {
  return (
    <TableStyled>
      <TableHead>
        <TableRow>
          <TableHeadItemStyled>
            <TableHeadItemText>
            Система налогооблажения физического лица-предпринимателя
            </TableHeadItemText>
          </TableHeadItemStyled>
          <TableHeadItemStyled>
            <TableHeadItemText>
              Стоимость услуги* грн/месяц
            </TableHeadItemText>
          </TableHeadItemStyled>
          <TableHeadItemStyled>
            <TableHeadItemText>
              Стоимость доплаты за каждого следующего сотрудника
            </TableHeadItemText>
          </TableHeadItemStyled>
        </TableRow>
      </TableHead>
      <TableBody>

        <TableRow>
          <TableDataStyled>
            <TableText>
              Единый налог I группа
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              600,00
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              150
            </TableText>
          </TableDataStyled>
        </TableRow>

        <TableRow>
          <TableDataStyled>
            <TableText>
              Единый налог II группа
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              600,00
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              150
            </TableText>
          </TableDataStyled>
        </TableRow>

        <TableRow>
          <TableDataStyled>
            <TableText>
              Единый налог III группа 5% без НДС
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              1000,00
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              150
            </TableText>
          </TableDataStyled>
        </TableRow>

        <TableRow>
          <TableDataStyled>
            <TableText>
              Единый налог 3% + НДС
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              5000,00
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              150
            </TableText>
          </TableDataStyled>
        </TableRow>

        <TableRow>
          <TableDataStyled>
            <TableText>
              Общая система налогооблажения без НДС
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              3000,00
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              150
            </TableText>
          </TableDataStyled>
        </TableRow>

        <TableRow>
          <TableDataStyled>
            <TableText>
              Общая система налогооблажения + НДС
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              5000,00
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              150
            </TableText>
          </TableDataStyled>
        </TableRow>

      </TableBody>
    </TableStyled>
  );
};

export default IndividualTable;
