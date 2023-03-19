import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Headofsection(props) {
  return (
    <div className="section-head my-6  text-5xl font-medium text-gold flex justify-center">
      <span className="title">
      {props.title}
      <span className="left"></span>
      <span className="right"></span>
      </span>
    </div>
  )
}
export default Headofsection;