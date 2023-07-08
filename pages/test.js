function Test() {
  const handelApiSubmit = () => {
    fetch('https://careforyouv1.000webhostapp.com/api/services/')
      .then(res => res.json())
      .then(json => console.log(json))
  }
  return (
    <>
      <p className="text-5xl p-10"
        onClick={() => {
          handelApiSubmit()
        }
        }
      >jkgyoiyg</p>
    </>
  )
}
export default Test;
