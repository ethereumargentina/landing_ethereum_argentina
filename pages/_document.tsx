import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import i18nextConfig from '../next-i18next.config'

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.locale ?? i18nextConfig.i18n?.defaultLocale

  return (
    <Html lang={currentLocale}>
      <Head>
        <title>ETH Argentina</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          lang="es"
          content="Ethereum Argentina | Agosto 16 - 19"
        />
        <meta
          name="title"
          lang="en"
          content="Ethereum Argentina | August 16 - 19"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          lang="es"
          content="Somos el punto de encuentro anual para promover el uso de la tecnología Ethereum, fomentar la innovación tecnológica y facilitar el debate sobre casos de uso exitosos."
        />
        <meta
          name="description"
          lang="en"
          content="We are the annual meeting point to promote the use of Ethereum technology, foster technological innovation and facilitate discussion of successful use cases."
        />
        <link rel="canonical" href="https://ethereumargentina.org/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@EtherArgentina" />
        <meta name="twitter:creator" content="@EtherArgentina" />
        <meta
          name="twitter:description"
          content="Somos el punto de encuentro anual para promover el uso de la tecnología Ethereum, fomentar la innovación tecnológica y facilitar el debate sobre casos de uso exitosos."
        />
        <meta name="twitter:title" content="Ethereum Argentina" />
        <meta
          name="twitter:image"
          content="/twitter-image.png"
        />

        <meta property="og:title" content="Ethereum Argentina" />
        <meta
          property="og:description"
          content="Somos el punto de encuentro anual para promover el uso de la tecnología Ethereum, fomentar la innovación tecnológica y facilitar el debate sobre casos de uso exitosos."
        />
        <meta property="og:url" content="https://ethereumargentina.org/" />
        <meta property="og:site_name" content="Ethereum Argentina" />
        <meta
          property="og:image"
          content="/twitter-image.png"
        />
        <meta
          property="og:image:secure_url"
          content="/twitter-image.png"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          name="description"
          content="Somos el punto de encuentro anual para promover el uso de la tecnología Ethereum, fomentar la innovación tecnológica y facilitar el debate sobre casos de uso exitosos."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}