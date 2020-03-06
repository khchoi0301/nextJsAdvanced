import Router from "next/router"
import Nprogress from "nprogress"
import Header from './Header'

Router.events.on("routeChangeStart", () => { Nprogress.start(); });

Router.events.on("routeChangeComplete", () => { Nprogress.done(); });

Router.events.on("routeChangeError", () => { Nprogress.done(); });


export default ({ children, title }: { children: any; title?: any }) => (
    <div className='root'>
        <Header />
        <main>{children}</main>
        <footer>&copy;{new Date().getFullYear()}</footer>
        <style jsx>{`
            main {
                margin : 2rem;
                display: inline;
            }
            .root {
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
            }
            footer {
                padding: 1em;
            }
        `}</style>
        <style global jsx>{`
            body {
                margin : 0;
                font-size: 100%;
            }
        `}</style>
    </div>
);
