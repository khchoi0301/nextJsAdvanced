import Router from "next/router";
import withGA from "next-ga";
import App from 'next/app'

class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default withGA("G-27Z9DVSKSQ", Router)(MyApp);

