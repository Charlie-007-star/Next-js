const Post = ({ post }) => {
    return (
        <>
        <h1>Single Post - {post.id} {post.title}</h1>
        <p>{post.body}</p>
        </>
    )
}

export default Post;

export async function getStaticProps(context) {  

    const { params } =  context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    console.log(data);
    return {
        props: {   
            post: data,
        }
    }
}