function CustomCard() {
  return (
    <>
      {/* main-container */}
      <div className="bg-[#fafafa] w-full h-screen p-8 md:p-0">
        {/* page-headeLines */}
        <div className="text-center lg:pt-12">
          <div className="text-4xl poppins-bold mb-3">
            <p>Premium Product Card</p>
          </div>
          <div className="text-lg poppins-medium text-[#71717A]">
            <p>Clean, modern e-commerce design with balanced layout</p>
          </div>
        </div>
        {/* card div */}
        <div className="flex justify-center pt-10 ">
          {/* card */}
          <div className="bg-white w-96 rounded-4xl overflow-hidden shadow-lg">
            {/* card - image */}
            <div className="h-52 overflow-hidden">
              <img
                src="/product-headphones.jpg"
                alt="headphone"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* card - content */}
            <div className="p-5">
              {/* tags */}
              <div className="flex mb-3">
                <p className="text-[#4F54D8] text-xs bg-[#EAEBFA] px-3 py-1 rounded-full font-medium hover:bg-[#f4f4f5] poppins-medium">
                  New Arrivals
                </p>
              </div>
              {/* product-title-details*/}
              <div>
                <p className="text-[16px] text-[#17171C] poppins-medium mb-2 ">
                  Premium Wireless Headphones
                </p>
                <p className=" text-sm text-[#71717A] poppins-regular line-clamp-2 mb-4">
                  Experience studio-quality sound with active noise cancellation
                  and 30-hour battery life
                </p>
              </div>
              <div className="flex pt-5 gap-2.5 items-center">
                {/* price */}
                <div className="min-w-4/12">
                  <p className="poppins-bold text-lg">$199.99</p>
                  {/* offer */}
                  <div className=" flex items-baseline gap-2 ">
                    <p className="text-sm line-through text-[#71717A] poppins-regular">
                      $299.99
                    </p>
                    <p className="text-xs text-[#21C45D] poppins-medium">
                      33% OFF
                    </p>
                  </div>
                </div>
                {/* button */}
                <div className="flex-1">
                  <button className="w-full bg-[#4F5FD8] hover:bg-[#363bd3] hover:cursor-pointer rounded-2xl text-white poppins-medium text-sm px-4 py-2.5 ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomCard;
