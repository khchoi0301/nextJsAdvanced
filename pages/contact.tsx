import Layout, { } from "../components/Layout";

const HireMe = () => (
    <Layout title="Hire me">
        <h1>You can contact me at</h1>
        <div>
            <a href="mailto:khchoi0301@gmail.com" target="_blank">
                <img className='img-gmail' src="../static/gmail.png" />
            </a>
            <a href="https://github.com/khchoi0301" target="_blank">
                <img className='img-github' src="../static/github.png" />
            </a>
        </div>
        <style jsx>{`
            h1 {
                text-align:center;
                margin-top:3rem;
                margin-bottom:4rem;
            }
            div {
                margin-left:auto;
                margin-right:auto;
                display:flex;
                align-items:center;
                justify-content:center;
                flex-wrap:wrap;
            }
            .img-gmail {
                width:110px;
            }
            .img-github {
                width:275px;
            }
        `}</style>
    </Layout>
);

export default HireMe;