import React from 'react'
import App from 'next/app'
import Router from 'next/router';

function trackPageView(url) {
    try {
        window.gtag('config', 'UA-98794084-2', {
            page_location: url
        });
    } catch (error) {
        console.log('trackPageView err', error)
    }
}

class MyApp extends App {

    componentDidMount() {
        Router.onRouteChangeComplete = url => {
            trackPageView(url);
        };
    }

    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default MyApp