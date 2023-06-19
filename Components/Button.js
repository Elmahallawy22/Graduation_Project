import Link from "next/link";

function Button(props){
    return (
        <Link href={`${props.link}/${props.user}`}
        className="text-2xl 2xl:text-3xl font-normal flex items-center text-white bg-main py-1 w-fit px-3 rounded-3xl" >
            <span className="mr-1">{props.name}</span>
            <span>{props.icon}</span>
        </Link>
        )
}
export default Button ;
