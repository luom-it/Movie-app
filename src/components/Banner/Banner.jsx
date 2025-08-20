import IconRating from "../../assets/Images/rating.png";
import IconRatingHalf from "../../assets/Images/rating-half.png";
import Img_temp from "../../assets/Images/Thanh_Gươm_Diệt_Quỷ_Chuyến_Tàu_Vô_Tận_Poster.jpg";
import IconPlay from "../../assets/Images/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-no-repeat bg-cover bg-banner relative">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black opacity-30" />
      {/* content */}
      <div className="w-full h-full flex items-center justify-around space-x-[30px] p-6 relative z-20">
        {/* content left */}
        <div className="w-[50%] text-white flex flex-col space-y-5 items-baseline">
          <p className="bg-gradient-to-r from-red-600 to-black py-2 px-3 text-md">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-bold ">Thanh Gươm Diệt Quỷ</h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating-half" className="w-8 h-8" />
            </div>
            <p className="w-full">
              Dựa vào số liệu của The Box Office Vietnam, Thanh gươm diệt quỷ:
              Vô hạn thành dẫn đầu phòng vé Việt, thu 61,7 tỉ đồng dịp cuối tuần
              qua, nâng tổng doanh thu lên 84,3 tỉ đồng sau 3 ngày ra rạp (cộng
              với suất chiếu sớm). Phim có khoảng 4.000 suất chiếu mỗi ngày, áp
              đảo hoàn toàn các bom tấn khác.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-black p-2 rounded cursor-pointer font-bold text-lg">
                Chi tiết
              </button>
              <button className="bg-red-600 p-2 rounded cursor-pointer font-bold text-lg">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="w-[50%] flex items-center justify-center">
          <div className="relative w-[65%] h-[400px] group">
            <img
              src={Img_temp}
              alt="temp"
              className="w-full h-full object-cover opacity-70" // hoặc opacity-[0.6]
            />
            {/* icon play */}
            <div
              className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 
            group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              <img
                src={IconPlay}
                alt="icon play"
                className="w-16 h-16 relative z-20 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
