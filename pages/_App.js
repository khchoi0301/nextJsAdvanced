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
        console.log("_app.js componentDidMount")
        Router.onRouteChangeComplete = url => {
            trackPageView(url);
        };
    }

    render() {
        const { Component, pageProps } = this.props
        console.log("_app.js render")
        return <Component {...pageProps} />
    }
}

export default MyApp