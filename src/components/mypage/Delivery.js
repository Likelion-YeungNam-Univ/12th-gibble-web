import React from "react";
import styled from "styled-components";

const deliveries = [
  { view: "보러가기", trackingNumber: "1234567890", status: "배송접수", donor: "기부01", count: 12, link: "https://example.com/1" },
  { view: "보러가기", trackingNumber: "1234567890", status: "배송중", donor: "기부02", count: 12, link: "https://example.com/2" },
  { view: "보러가기", trackingNumber: "1234567890", status: "배송완료", donor: "기부03", count: 12, link: "https://example.com/3" },
  { view: "보러가기", trackingNumber: "1234567890", status: "배송완료", donor: "기부04", count: 12, link: "https://example.com/4" },
  { view: "보러가기", trackingNumber: "1234567890", status: "배송접수", donor: "기부01", count: 12, link: "https://example.com/5" },
  { view: "보러가기", trackingNumber: "1234567890", status: "배송중", donor: "기부02", count: 12, link: "https://example.com/6" },
  { view: "보러가기", trackingNumber: "1234567890", status: "배송완료", donor: "기부03", count: 12, link: "https://example.com/7" },
  { view: "보러가기", trackingNumber: "1234567890", status: "배송완료", donor: "기부04", count: 12, link: "https://example.com/8" },
];

const Delivery = () => {
  return (
    <Wrapper>
      <List>헌혈증 배송 조회</List>
      <TableHeader>
        <HeaderRow>
          <Th>게시글</Th>
          <Th>운송장 번호</Th>
          <Th>배송 현황</Th>
          <Th>기부자이름</Th>
          <Th>기부헌혈증 개수</Th>
        </HeaderRow>
      </TableHeader>
      <TableWrapper>
        <Table>
          <tbody>
            {deliveries.map((delivery, index) => (
              <Tr key={index}>
                <Td>
                  <a href={delivery.link} target="_blank" rel="noopener noreferrer">
                    {/* delivery.link에 기부보러가기링크 */}
                    {delivery.view}
                  </a>
                </Td>
                <Td>{delivery.trackingNumber}</Td>
                <Td className="status">{delivery.status}</Td>
                <Td>{delivery.donor}</Td>
                <Td className="count">{delivery.count}개</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1000px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;
  margin-top: 5px;
`;

const List = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 115.385% */
  letter-spacing: -0.65px;
  margin-bottom: 20px;
`;

const TableHeader = styled.div`
  display: grid;
  width: 845px;
  grid-template-columns:20% 21% 18% 17% 15%;
  border-bottom: 2px solid #ddd;
`;

const HeaderRow = styled.div`
  display: contents;
`;

const Th = styled.div`
  padding: 8px;
  font-weight: bold;
  text-align: left;
  color: #767676;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 166.667% */
  letter-spacing: -0.45px;
`;

const TableWrapper = styled.div`
    width: 845px;
    height: 190px;
    overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
`;

const Tr = styled.tr`
    display: grid;
    color: #767676;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 166.667% */
    letter-spacing: -0.45px;

  grid-template-columns:20% 22.5% 20% 20% 15%;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 8px;

  &.count {
    color: #F42E3D;
  }
  &.status {
    color: #000;
  }

  a {
    color: inherit;
    text-decoration: underline;

  }
`;
export default Delivery;
