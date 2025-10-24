import productData from "../productData/products.json";

function CustomCard() {
  return (
    <>
      {/* main-container */}
      <div className="bg-main-bg w-full h-screen p-8 md:p-0">
        {/* page-headeLines */}
        <div className="text-center lg:pt-12">
          <div className="text-4xl poppins-bold mb-3">
            <p>Premium Product Card</p>
          </div>
          <div className="text-lg poppins-medium text-light-text">
            <p>Clean, modern e-commerce design with balanced layout</p>
          </div>
        </div>
        {/* card div */}
        <div className="flex justify-center pt-10 gap-5">
          {/* card */}
          {productData.productList.map((product, index) => (
            <div
              key={index}
              className="bg-white w-96 rounded-4xl overflow-hidden shadow-lg"
            >
              {/* card - image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* card - content */}
              <div className="p-5">
                {/* tags */}
                <div className="flex mb-3">
                  <p className="text-tag text-xs bg-tag-bg px-3 py-1 rounded-full font-medium hover:bg-tag-hover-bg poppins-medium">
                    {product.productTag}
                  </p>
                </div>
                {/* product-title-details*/}
                <div>
                  <p className="text-base text-product-name poppins-medium mb-2 ">
                    {product.productName}
                  </p>
                  <p className=" text-sm text-light-text poppins-regular line-clamp-2 mb-4">
                    {product.productDetails}
                  </p>
                </div>
                <div className="flex pt-5 gap-2.5 items-center">
                  {/* price */}
                  <div className="min-w-4/12">
                    <p className="poppins-bold text-lg">
                      ${product.offerPrice}
                    </p>
                    {/* offer */}
                    {product.originalPrice > product.offerPrice && (
                      <div className=" flex items-baseline gap-2 ">
                        <p className="text-sm line-through text-light-text poppins-regular">
                          ${product.originalPrice}
                        </p>

                        <p className="text-xs text-success poppins-medium">
                          {Math.round(
                            ((product.originalPrice - product.offerPrice) /
                              product.originalPrice) *
                              100
                          )}
                          % OFF
                        </p>
                      </div>
                    )}
                  </div>
                  {/* button */}
                  <div className="flex-1">
                    <button className="w-full bg-button-bg hover:bg-button-hover-bg hover:cursor-pointer rounded-2xl text-white poppins-medium text-sm px-4 py-2.5 ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default CustomCard;
