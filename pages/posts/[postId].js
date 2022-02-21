import { useRouter } from "next/router";

const Post = ({ post }) => {
    const router = useRouter();

    if(router.isFallback){
        <h1>Loading...</h1>
    }
    return (
        <>
        <h1>Single Post - {post.id} {post.title}</h1>
        <p>{post.body}</p>
        </>
    )
}

export default Post;

/* ------------------------------ Static paths ------------------------------ */
export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const paths = data.map((post) => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

/* ------------------------------ Static Props ------------------------------ */
export async function getStaticProps(context) {  

    const { params } =  context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    if(!data.id){
        return {
            notFound:true
        }
    }

    return {
        props: {   
            post: data,
        }
    }
}