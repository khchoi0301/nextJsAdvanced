import Layout from "../components/Layout";

const Post = ({ url }) => {
    return (
        <Layout title={url.query.title}>
            <p>Fugiat veniam eiusmod in ex velit ex adipisicing dolor.
            Sint officia anim cillum non sunt culpa et duis.
            Ut ullamco aute dolor eiusmod eu.
            Voluptate aliqua nulla aute deserunt minim officia nisi nisi non et in.
            Irure deserunt do consectetur id id elit occaecat sint laborum mollit fugiat.
            Aliquip culpa duis veniam nulla anim consectetur.</p>
        </Layout>
    )
}

export default Post;
