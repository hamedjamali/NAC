import styled from "@emotion/styled";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const DashBoard: FC = () => {
  const Main = styled.div`
    display: flex;
    width: 100%;
    height: 36px;
    justify-content: center;
    align-items: center;
  `;
  const Menu = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
  `;
  const Item = styled.div`
    display: flex;
    cursor: pointer;
  `;
  return (
    <Main>
      <Menu>
        <Item>
          <span>List item</span>
        </Item>
        <Item>
          <span>Fibonacci</span>
        </Item>
        <Item>
          <span>Collatz Conjecture</span>
        </Item>
      </Menu>
      <Outlet />
    </Main>
  );
};

export default DashBoard;
