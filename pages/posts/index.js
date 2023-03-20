function Posts(props){
    return(
        <>
            {props.posts.map((item)=>{
                return(
                    <p>{item.title}</p>
                )
            })}
        </>
    )
}
export default Posts

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props : {
            posts: data 
        }
    }
  }