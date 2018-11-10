import React, { Fragment } from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <Fragment>
      <ul>
        <Link href="/">
          <a>Главная</a>
        </Link>
        <Link href="/accountant">
          <a>Бухгалтерские услуги</a>
        </Link>
        <Link href="/registration-ooo">
          <a>Регистрация ООО</a>
        </Link>
        <Link href="/registration-flp">
          <a>Регистрация ФЛП</a>
        </Link>
        <Link href="/about">
          <a>О нас</a>
        </Link>
      </ul>
      <style jsx>{`
        ul {
          position: fixed;
          top: 0; left: 0; right: 0;
          width: 100%;
          background-color: #74d9f2;
          height: 50px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          padding: 0 30px;
        }

        a {
          font-family: 'Montserrat';
          font-size: 18px;
          color: #000;
          line-height: 50px;
        }

        `}</style>
    </Fragment>
  );
}

export default Navigation;
