function Categories() {
  return (
    <div className="flex justify-center pt-8 pb-16 " id='services'>
      <div className="container">
        <div className="flex flex-wrap justify-center gap-2 md:gap-5 mt-10 lg:mt-16 font-bold text-white text-center text-2xl lg:text-3xl ">
          <a href='/' className="category overflow-hidden flex flex-col rounded-lg bg-main sm:w-5/12 xl:w-1/4">
            <p className="py-2 lg:py-3">Pediatic Nursing</p>
            <img src='child.jpg' className="category-image flex-1" />
          </a>
          <a href='/' className="category overflow-hidden flex flex-col rounded-lg bg-main sm:w-5/12 xl:w-1/4">
            <p className="py-2 lg:py-3">Eaderly Nursing</p>
            <img src='old.jpg' className="category-image flex-1" />
          </a>
          <a href='/' className="category overflow-hidden flex flex-col rounded-lg bg-main sm:w-5/12 xl:w-1/4">
            <p className="py-2 lg:py-3">Special Care</p>
            <img src='special.jpg' className="category-image flex-1" />
          </a>
          <a href='/' className="category overflow-hidden flex flex-col rounded-lg bg-main sm:w-5/12 xl:w-1/4">
            <p className="py-2 lg:py-3">Emergency Nursing</p>
            <img src='speed.jpg' className="category-image flex-1" />
          </a>
          <a href='/' className="category overflow-hidden flex flex-col rounded-lg bg-main sm:w-5/12 xl:w-1/4">
            <p className="py-2 lg:py-3">Woman Nursing</p>
            <img src='woman.jpg' className="category-image flex-1" />
          </a>
          <a href='/' className="category overflow-hidden flex flex-col rounded-lg bg-main sm:w-5/12 xl:w-1/4">
            <p className="py-2 lg:py-3">Psychiatric Nursing</p>
            <img src='soul.jpeg' className="category-image flex-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Categories;