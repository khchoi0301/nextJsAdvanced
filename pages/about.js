import Layout from "../components/Layout";
import Link from "next/link";
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/khchoi0301')
        const data = await res.json();
        return { user: data }
    }

    // state = {
    //     user: null
    // }

    // componentDidMount() {
    //     fetch('https://api.github.com/users/khchoi0301')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 user: data
    //             })
    //         })
    // }

    render() {

        const { user } = this.props
        return (
            <Layout title="About">
                <p>{user.name}</p>
                <Link href="/">
                    <a>Go to home</a>
                </Link>
                <p>Javasciprt programmer</p>
                <img src={user.avatar_url} height="200px"></img>
            </Layout>
        );
    }
}

// export default () => (
//     <Layout title="About">
//         <p>Javasciprt programmer</p>
//         <img src="../static/jslogo.png" height="200px"></img>
//     </Layout>
// );
