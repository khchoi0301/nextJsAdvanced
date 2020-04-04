import Link from "next/link";
import Head from "next/head";

const navItems: { label: string; page?: string; style?: string; }[] = [
    { label: 'KIHONG CHOI', page: '/', style: "homeButton" },
    // { label: 'About', page: '/about', style: "button" },
    { label: 'Contact', page: '/contact', style: "button" },
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
                    {/* {label === "Blog" ?
                        <a href={page} target="_blank" className={style}>{label}</a>
                        : <Link href={page}><a className={style}>{label}</a></Link>} */}
                    <Link href={page}><a className={style}>{label}</a></Link>
                </li>
            ))}
        </header>
        <style jsx>{`
            header {
                width:100%;
                height:3vh;
                display:flex;
                justify-content: space-around;
                align-items:center;
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
            li {
                display:flex;
            }
            .homeButton {
                letter-spacing: 3px;
            }
            .button {
                letter-spacing: 2px;
            }
        `}</style>
    </>
);
