function Balance(){
  return (
    <div className="text-3xl text-white font-bold px-56 pt-12 ">
        <h1 className="text-4xl text-gold ">Account Balance</h1>
        <div className="flex bg-main py-16 px-12 mt-8 rounded-lg space-x-10">
          <div className="flex flex-col items-center space-y-5">
            <h3>Total Balance</h3>
            <span className="text-gold">20.00$</span>
            <p className="font-light text-base text-center">The entire balance in your account now includes earnings and pending balance as well.</p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h3>Suspended Balance</h3>
            <span className="text-gold">15.00$</span>
            <p className="font-light text-base text-center">Your winnings are held for 14 days before you can use them.</p>        
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h3>Profits Can Be Withdrawn</h3>
            <span className="text-gold">5.00$</span>
            <p className="font-light text-base text-center">The amount you have earned from the sale of services can be withdrawn to your PayPal account.</p>
          </div>
        </div>
    </div>
  )
}
export default Balance;