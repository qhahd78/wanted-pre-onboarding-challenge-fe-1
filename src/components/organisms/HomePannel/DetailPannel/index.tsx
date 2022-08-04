import React from "react";
import DetailContent from "../../../molecules/DetailContent";
import { DetailPannelContainer } from "./style";

interface DetailPannelProperties {
  title: string;
  content: string;
}

const DetailPannel = ({ title, content }: DetailPannelProperties) => {
  return (
    <DetailPannelContainer>
      <DetailContent title={title} content={content} />
    </DetailPannelContainer>
  );
};

export default DetailPannel;
