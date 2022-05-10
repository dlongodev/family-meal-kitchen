import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://app.snipcart.com" />
                    <link rel="preconnect" href="https://cdn.snipcart.com" />
                    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script async src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"></script>
                    <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} data-config-modal-style="side">
                        <address-fields section="top">
                            <div>
                                <snipcart-label for="phone">Phone number</snipcart-label>
                                <snipcart-input name="phone" required></snipcart-input>
                            </div>
                        </address-fields>
                        <billing section="bottom">
                            <fieldset className="snipcart-form__set">
                                <div className="snipcart-form__row">
                                    <div className="snipcart-form__field snipcart-form__cell--large">
                                        <snipcart-label class="snipcart__font--tiny" for="delivery-date">Delivery Date:</snipcart-label>
                                        <snipcart-input type="date" name="delivery-date" required></snipcart-input>
                                    </div>
                                    <div className="snipcart-form__field snipcart-form__cell--tidy snipcart-form__cell--tidy2">
                                        <snipcart-label class="snipcart__font--tiny" for="delivery-time">Delivery Time:</snipcart-label>
                                        <snipcart-input type="time" name="delivery-time" required></snipcart-input>
                                    </div>
                                </div>
                                <div className="snipcart-form__field">
                                    <snipcart-label class="snipcart__font--tiny" for="instructions">Additional Instructions:</snipcart-label>
                                    <snipcart-input type="textarea" rows="3" name="instructions"></snipcart-input>
                                </div>
                            </fieldset>
                        </billing>
                    </div>
                </body>
            </Html>
        )
    }
}