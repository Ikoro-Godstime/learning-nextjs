import Document, { Html, Head, Main, NextScript } from 'next/document'

// Rendered only on the server

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=7" />
          <meta name="description" content="my personal site with nextJs" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}
