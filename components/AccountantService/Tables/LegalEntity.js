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

const LegalEntityTable = () => {
  return (
    <TableStyled>
      <TableHead>
        <TableRow>
          <TableHeadItemStyled>
            <TableHeadItemText>
              Система налогообложения юридического лица
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
              Упрощенная система налогооблажения, 5% (3 группа), без НДС
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              1500,00
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
              Упрощенная система налогооблажения, 3% (3 группа),+ НДС
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

        <TableRow>
          <TableDataStyled>
            <TableText>
              Любая система налогооблажения
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              при отсутствии операций и начислений по зароботной плате
            </TableText>
          </TableDataStyled>
          <TableDataStyled>
            <TableText>
              500
            </TableText>
          </TableDataStyled>
        </TableRow>

      </TableBody>
    </TableStyled>
  );
};

export default LegalEntityTable;
