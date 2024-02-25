import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              officia, rerum facere dolor repudiandae perspiciatis est quam fuga
              modi in itaque voluptate consequatur atque eveniet, nemo laborum
              quis mollitia quisquam.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0156666.jpeg"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              officia, rerum facere dolor repudiandae perspiciatis est quam fuga
              modi in itaque voluptate consequatur atque eveniet, nemo laborum
              quis mollitia quisquam.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0156666.jpeg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
