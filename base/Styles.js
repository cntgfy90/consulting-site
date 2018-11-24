import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <style jsx global>{`

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        a, a:hover {
          text-decoration: none;
        }

        ul {
          list-style: none;
        }

        @font-face {
            font-family: 'Montserrat-SemiBold';
            src: url('../static/fonts/Montserrat-SemiBold.woff2') format('woff2'),
                url('../static/fonts/Montserrat-SemiBold.woff') format('woff');
            font-weight: 600;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat-Medium';
            src: url('../static/fonts/Montserrat-Medium.woff2') format('woff2'),
                url('../static/fonts/Montserrat-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat-ExtraBold';
            src: url('../static/fonts/Montserrat-ExtraBold.woff2') format('woff2'),
                url('../static/fonts/Montserrat-ExtraBold.woff') format('woff');
            font-weight: 800;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat-Black';
            src: url('../static/fonts/Montserrat-Black.woff2') format('woff2'),
                url('../static/fonts/Montserrat-Black.woff') format('woff');
            font-weight: 900;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat-Thin';
            src: url('../static/fonts/Montserrat-Thin.woff2') format('woff2'),
                url('../static/fonts/Montserrat-Thin.woff') format('woff');
            font-weight: 100;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat';
            src: url('../static/fonts/Montserrat-Regular.woff2') format('woff2'),
                url('../static/fonts/Montserrat-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat-Light';
            src: url('../static/fonts/Montserrat-Light.woff2') format('woff2'),
                url('../static/fonts/Montserrat-Light.woff') format('woff');
            font-weight: 300;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat-Bold';
            src: url('../static/fonts/Montserrat-Bold.woff2') format('woff2'),
                url('../static/fonts/Montserrat-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
        }

        `}</style>
    </Fragment>
  );
}
