import React, { Component } from 'react';
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout";

const PostLink = ({ slug, title }) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

class Blog extends Component {
    componentDidMount() {
        setTimeout(() => {
            Router.back();
        }, 1500);
        window.open('https://www.notion.so/kihongchoi/f5bc82cd572948dbaa283cf5b3aff74f', '_blank');
    }

    render() {
        return (
            <Layout title="My Blog">
                <div>notion page로 연결 합니다. 연결이 완료되면 이전 페이지로 돌아갑니다. loading...</div>
            </Layout>
        );
    }
}

export default Blog;