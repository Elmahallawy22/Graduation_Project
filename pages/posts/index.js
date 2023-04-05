import { useEffect } from "react";

function Posts(props){
    useEffect(()=>{
        // fetch('http://127.0.0.1:8000/api/auth/register')
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
            console.log(props.posts);
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