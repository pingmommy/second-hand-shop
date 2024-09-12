import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./ProductDetail.Carousel,style";
import type { IQuery } from "../../../../../commons/types/generated/types";

const BASE_URL = "https://storage.googleapis.com/";

export default function Carousel({
  data,
}: {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}): JSX.Element {
  const filteredImages = data?.fetchUseditem.images?.filter((el) => el !== "");

  function Arrow(props: any): JSX.Element {
    const { className, style, onClick } = props;
    return (
      <S.Arrow>
        <div
          className={className}
          style={{ ...style, display: "block", color: "gray" }}
          onClick={onClick}
        />
      </S.Arrow>
    );
  }

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img
            src={`${BASE_URL}${filteredImages?.[i]}`}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots",
    infinite: filteredImages != null && filteredImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <S.ImageWrapper>
      <S.slickThumb>
        <Slider {...settings}>
          {filteredImages?.map((image, idx) => {
            console.log(idx, image);
            return (
              <div key={idx}>
                <img
                  src={BASE_URL + image}
                  style={{
                    width: "500px",
                    height: "400px",
                    // maxHeight: "500px",
                    objectFit: "contain",

                    padding: "0 0.5rem",
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </S.slickThumb>
    </S.ImageWrapper>
  );
}
