// import Layout, { } from "../components/Layout";

// const index = () => (
//     <Layout title="Home">
//         <p>welcome to the home page</p>
//     </Layout>
// );

// export default index;

import Layout from "../components/Layout";
import React, { Component } from 'react';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

interface Props {
    content?: any;
}

export default class About extends Component<Props> {

    static async getInitialProps(context) {
        const content = await import("../md/resume/README.md")
        const data = matter(content.default)
        return {
            ...data,
        }
    }

    render() {
        const { content } = this.props

        return (
            <Layout title="About">
                <div className="about-upper">
                    <span className="about-upper-text">
                        <h1>About me</h1>
                        <p>
                            몰입과 태도가 중요하다고 믿는 개발자 입니다.<br />
                            Javascript를 좋아하고<br />
                            Javascript로 무언가를 만들는 것을 더 좋아합니다.<br />
                            프로그래밍으로 새로운 미래를 만듭니다.
                        </p>
                    </span>
                    <img src="/static/aboutme.png"></img>
                </div>
                <hr />
                <div className='about-resume'>
                    <div>
                        <ReactMarkdown source={content} />
                    </div>
                </div>
                <style jsx>{`
                    .about-upper, hr, .about-resume{
                        width:70vw;
                        max-width:1000px;
                        margin-left:auto;
                        margin-right:auto;
                    }
                    .about-upper {
                        display: flex;
                        justify-content: space-between;
                        align-content: space-between;
                        height:100%;
                        margin-bottom:2.5rem;
                        flex-wrap: wrap;
                    }
                    h1 {
                        margin-top:3rem;
                        margin-bottom:2rem;
                    }
                    .about-upper p {
                        line-height:1.8rem;
                        margin-bottom:2rem;
                    }
                    hr {
                        margin-bottom:3rem;
                        height:1px; 
                        background: black;
                    }
                    .about-resume {
                        margin-top:20px;
                    }
                    .about-upper-text {
                        /* float:left; */
                        margin-right:2rem;
                        width:30vw;
                        min-width:300px;
                        max-width:420px;
                    }
                    img {
                        width:37vw;
                        height:auto;
                        max-height:320px;
                        min-width:300px;
                        max-width:480px;
                    }
                `}</style>
            </Layout>
        );
    }
}
