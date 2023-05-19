export function DashNavNotf(props) {
  return (
    <div>
          <div className='relative p-2 border border-green-300 rounded-lg mr-1 md:mr-4'>
      <span className='text-2xl'>
        {props.icon}
      </span>
      <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${props.active == true ? 'bg-red-500' : 'bg-gray-200'}`}></span>
    </div>
    </div>
  )
};