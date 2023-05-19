export function CategoryName(props){
    return <p className="flex items-center text-gold text-xl xl:text-2xl pl-6 lg:pl-0">
        <span className="mr-3">{props.icon}</span>
        <span className="hidden lg:block" >{props.title}</span>
    </p>
}