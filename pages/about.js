import Layout from "../components/Layout";
import Link from "next/link";
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
import Error from "./_error";


export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/khchoi0301')
        const statusCode = res.status > 200 ? res.status : false
        const data = await res.json();
        return { user: data, statusCode }
    }

    render() {
        const { user, statusCode } = this.props

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title="About">
                {/* <p>{user.name}</p> */}
                {/* <Link href="/">
                    <a>Go to home</a>
                </Link> */}

                <div className="upper">
                    <div className="aboutme">
                        <h1>about me</h1>
                        <p>몰입과 태도가 중요하다고 믿는 개발자 입니다.</p>
                        <p>세부 내용</p>
                        {/* <p>Javasciprt programmer</p> */}
                    </div>
                    <img src="../static/aboutme.jpg"></img>
                </div>
                <style jsx>{`
                    .upper {
                        /* display: inline; */
                        width:70vw;
                        margin-left:auto;
                        margin-right:auto;
                    }
                    .aboutme {
                        float:left;
                        display: inline;
                        width:40%;
                    }
                    .aboutme > p {
                        /* display: inline */
                    }
                    img {
                        float: right;
                        width:50%;
                    }
                `}</style>
                {/* <img src={user.avatar_url} height="200px"></img> */}
            </Layout>
        );
    }
}
