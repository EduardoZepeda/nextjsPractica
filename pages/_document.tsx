import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html style={{ height: '100%'}}>
        <Head />
        <style>{`
            #__next { height: 100% }
          `}
          </style>
          {this.props.styleTags}
        <body style={{ height: '100%'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
