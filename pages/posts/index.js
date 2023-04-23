import { useEffect } from "react";

function Posts(props){
    useEffect(()=>{
        
    },[])
    return(
        <>
            {/* {props.posts.map((item)=>{
                return(
                    <p>{item.body}</p>
                )
            })} */}
        </>
    )
}
export default Posts

export async function getStaticProps(){
    const res = await fetch('https://care-for-you-v1.000webhostapp.com./api/get_users');
    const data = await res.json();
    return {
        props : {
            posts: data
        }
    }
  }