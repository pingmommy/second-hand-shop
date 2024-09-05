import styled from "@emotion/styled";

export const ImageWrapper = styled.section`
  margin: 2rem 0 6rem 0;
  /* border: 1px solid red; */
`;

export const slickThumb = styled.div`
  .slick-dots li {
    width: 6rem;
    border-radius: 5px;
  }

  .slick-dots li.slick-active img {
    outline: 2px solid var(--color-grey-300);
    border-radius: 5px;
  }
  padding: 0 50px;
`;

export const Arrow = styled.div`
  color: gray;
  .slick-prev:before,
  .slick-next:before {
    color: lightgrey;
  }
`;
