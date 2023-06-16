import Link from "next/link";
import { useEffect } from "react";
import { BsArrowRight } from 'react-icons/bs';

export function Box(props) {
  useEffect(() => {

    const counters = document.querySelectorAll('.value');
    const speed = 1000;
    counters.forEach(counter => {
      const animate = () => {
        const value = +counter.getAttribute('length');
        const data = +counter.innerText;
        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        } else {
          counter.innerText = value;
        }
      }
      animate();
    });
  }, [])

  return (
    <div className={`small-box ${props.color} text-white w-full md:w-96 lg:w-1/4 my-3`} >
      <div className="flex justify-between">
        <div className="pl-3">
          <h3 className="value my-2 text-3xl font-bold" length={props.lngth} >0</h3>
          <p className="mb-3 text-l font-semibold">Total {`${props.name}`} (s)</p>
        </div>
        <span className="icon text-4xl m-2 text-gray-300"> {props.icon} </span>
      </div>
      <Link href={`http://localhost:3000/dashboard/${props.link}`} className={`${props.scolor} w-full flex justify-center items-center text-sm py-1`}
      >More info <BsArrowRight className="ml-2" /></Link>
    </div>
  )
}