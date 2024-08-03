import React from "react";
import styled from "styled-components";

const donations = [
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "박수민", count: 24 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "성민상", count: 26    },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "박영남", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명구", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명국", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명철", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명철", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명구", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명국", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명철", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명철", count: 25 },
  { title: "이러한 상황입니다. 따뜻한 기부 부탁드립니다.", donor: "김명구", count: 25 },
  // Add more donations as needed
];

const Donation = () => {
  return (
    <Wrapper>
      <List>기부 받은 내역</List>
      <TableHeader>
        <HeaderRow>
          <Th>게시글 제목</Th>
          <Th>기부자이름</Th>
          <Th>헌혈증 개수</Th>
        </HeaderRow>
      </TableHeader>
      <TableWrapper>
        <Table>
          <tbody>
            {donations.map((donation, index) => (
              <Tr key={index}>
                <Td>{donation.title}</Td>
                <Td>{donation.donor}</Td>
                <Td className="count">{donation.count}개</Td>
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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;
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
    width: 845px;
    display: grid;
    grid-template-columns: 60% 20% 20%;
    border-bottom: 2px solid #ddd;
    
`;

const HeaderRow = styled.div`
    display: contents;
    color: #767676;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 166.667% */
    letter-spacing: -0.45px;
    margin:30px;
    `;

const Th = styled.div`
  padding: 8px;
  color: #767676;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 166.667% */
    letter-spacing: -0.45px;  text-align: left;
`;

const TableWrapper = styled.div`
    width: 845px;
    height: 200px;
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
    grid-template-columns: 62.5% 22.5% 15%;
    &:nth-child(even) {
        background-color: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 8px;
  &.count {
    color: #F42E3D;
  }
`;

export default Donation;