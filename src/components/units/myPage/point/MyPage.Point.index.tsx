import { useEffect, useRef, useState } from "react";
import type { CheckboxRef, RadioChangeEvent } from "antd";
import { ConfigProvider, Flex, Modal, Radio } from "antd";
import * as S from "../myPage.style";
import { Row } from "./MyPage.Point.style";
import { useOpen } from "../../../../commons/stores";
import { useCreatePointTransactionOfLoading } from "../../../commons/hooks/customs/useCreatePointTransactionOfLoading";
import SearchBarWithBtn from "../../../commons/search/searchBarWithBtn/SearchBarWithBtn";
// import { getDate } from "../../../../commons/libraries/getDate";
// import { useQueryFetchPointTransactions } from "../../../commons/hooks/queries/useQueryFetchPointTransactions";
// import { useQueryFetchPointTransactionsOfLoading } from "../../../commons/hooks/queries/useQueryFetchPointTransactionsOfLoading";
// import { useQueryFetchPointTransactionsOfBuying } from "../../../commons/hooks/queries/useQueryFetchPointTransactionsOfBuying";
// import { useQueryFetchPointTransactionsOfSelling } from "../../../commons/hooks/queries/useQueryFetchPointTrasactionsOfSelling";

const MY_POINT_LIST = [
  { title: "전체내역", id: "all-history" },
  { title: "충전내역", id: "charge-history" },
  { title: "구매내역", id: "purchase-history" },
  { title: "판매내역", id: "sale-history" },
];

const options = [
  { label: "1,000P", value: 1000 },
  { label: "2,000P", value: 2000 },
  { label: "3,000P", value: 3000 },
  { label: "4,000P", value: 4000 },
  { label: "5,000P", value: 5000 },
];

export default function MyPoint({ page }: any): JSX.Element {
  const radioRef = useRef<CheckboxRef>(null);
  const [isSelected, setIsSelected] = useState("all-history");
  const isOpen = useOpen((state) => state.isOpen);
  const setIsOpen = useOpen((state) => state.setIsOpen);
  const { LoadPoint } = useCreatePointTransactionOfLoading();
  // const { data } = useQueryFetchPointTransactions(1, ""); // 전체
  // const { data: LD } = useQueryFetchPointTransactionsOfLoading(1, ""); // 충전
  // const { data: BD } = useQueryFetchPointTransactionsOfBuying(1, ""); // 구매
  // const { data: SD } = useQueryFetchPointTransactionsOfSelling(1, ""); // 판매

  const handleRefetch = (value: string): void => {
    console.log(value);
  };

  const [value, setValue] = useState(5000);

  const onChange = (e: RadioChangeEvent): void => {
    setValue(Number(e.target.value));
  };

  const onCloseModal = (): void => {
    setIsOpen(false);
  };

  const onClickLoadingPoint = (): void => {
    LoadPoint(value); // 유저이름 유저 이메일도!
  };

  useEffect(() => {
    if (isOpen && radioRef.current != null) {
      radioRef.current.focus();
    }
  }, [isOpen]);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(251 212 91)",
          },
        }}
      >
        <Modal
          open={isOpen}
          forceRender={true}
          width={350}
          footer={(_) => (
            <S.LoadPointBtn onClick={onClickLoadingPoint}>
              충전하기
            </S.LoadPointBtn>
          )}
          onCancel={onCloseModal}
        >
          <h2 style={{ textAlign: "center", paddingTop: "1.5rem" }}>
            충전할 금액을 선택해주세요.
          </h2>
          <S.MyRadioWrapper>
            <Radio.Group
              onChange={onChange}
              value={value}
              style={{ width: "100%" }}
            >
              <Flex vertical gap="small">
                {options.map((el) => (
                  <S.MyRadio key={el.label} value={el.value} ref={radioRef}>
                    {el.label}
                  </S.MyRadio>
                ))}
              </Flex>
            </Radio.Group>
          </S.MyRadioWrapper>
        </Modal>
      </ConfigProvider>
      <S.PageHeader>
        <SearchBarWithBtn
          list={MY_POINT_LIST}
          onSearch={handleRefetch}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          isHidden={true}
        />
      </S.PageHeader>
      <S.TableWrapper>
        <Row colCount={4}>
          <S.THead>날짜</S.THead>
          <S.THead>내용</S.THead>
          <S.THead>거래 및 충전내역</S.THead>
          <S.THead>잔액</S.THead>
        </Row>

        <Row colCount={4}>
          <S.TColum>2020.09.18</S.TColum>
          <S.TColum>충전</S.TColum>
          <S.TColum>+2,000</S.TColum>
          <S.TColum>₩10,000</S.TColum>
        </Row>
      </S.TableWrapper>
    </>
  );
}
