import React from "react";
import DetailPannel from "../../components/organisms/HomePannel/DetailPannel";
import ListPannel from "../../components/organisms/HomePannel/ListPannel";
import { HomePageContainer } from "./style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <ListPannel />
      <DetailPannel />
    </HomePageContainer>
  );
};

export default HomePage;
