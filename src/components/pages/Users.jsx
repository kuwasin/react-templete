import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `くわしん${val}`,
    image: "https://source.unsplash.com/WX4i1Jq_o0Y",
    email: "123456@example.com",
    phone: "090-8888-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https//google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <UserArea>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </UserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const UserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
