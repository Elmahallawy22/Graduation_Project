import { Overviews } from "./Overviews";
import { Statistics } from "./Statistics";

export function Overview() {
  return (
    <div className="flex gap-2 items-start flex-wrap lg:flex-nowrap">
      <Overviews />
      <Statistics />
    </div>
    
  )
}