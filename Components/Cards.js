import Card from "./Card";
function Cards(props) {
  return (
    <>
      {
        props.users.map((item) => {
          return (
            <div className='p-0' key={item.UserID}>
              <Card key={item.UserID} image={item.UserImage} name={item.UserName} price={item.Weeks} clr={item.StatusBg}
                rate={Number.parseFloat(item.Weeks/9).toFixed(3)} location={item.Destance}  />
            </div>
          )
        })
      }
    </>
  )
}
export default Cards;