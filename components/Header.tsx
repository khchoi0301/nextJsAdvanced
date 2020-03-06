import Link from "next/link";
import Head from "next/head";

const navItems: { label: string; page?: string; style?: string; }[] = [
    { label: 'KIHONG CHOI', page: '/', style: "homeButton" },
    { label: 'About', page: '/about', style: "button" },
    { label: 'Contact', page: '/hireme', style: "button" },
    { label: 'Blog', page: '/blog', style: "button" },
]

export default () => (
    <>
        <Head>
            <title>kihong | 개발자 최기홍</title>
        </Head>
        <header>
            {navItems.map(({ label, page, style }) => (
                <li key={label}>
                    <Link href={page}><a className={style}>{label}</a></Link>
                </li>
            ))}
        </header>
        <style jsx>{`
            header {
                width:100%;
                display:flex;
                justify-content: space-around;
                padding: 1em;
                font-size: 1.2rem;
                background: black;
            }
            header a {
                color : darkgray;
                text-decoration: none;
            }
            header a:hover {
                font-weight: bold;
                color : lightgray;
            }
            .homeButton {
                letter-spacing: 4px;
            }
            .button {
                letter-spacing: 2px;
            }
        `}</style>
    </>
);
