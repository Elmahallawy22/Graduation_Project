import Card from "./Card";
function Cards(props) {
  return (
    <>
      {
          props.users.map((item) => {
          return (
            <div className='p-0' key={item.Id}>
              <Card key={item.Id} id={item.Id}
              image={item.Image} name={item.NameShort} price={item.Price} clr={item.StatusBg}
                rate={Number.parseFloat(item.Price/5).toFixed(1)} location={item.Location}  user={item.Id}/>
            </div>
          )
        })
      }
    </>
  )
}
export default Cards;