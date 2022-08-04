import styled from "styled-components";
import { FONT_STYLES } from "../../../styles/common/font-style";

const DetailContentContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const DetailTitleBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const DetailTitle = styled.p`
  ${FONT_STYLES.P_EB}
  font-size: 30px;
`;

const DetailContentBox = styled.div`
  height: 810px;
  padding: 40px 0;
`;

const DetailDate = styled.p`
  ${FONT_STYLES.P_R}
  color: #00266d;
  padding-left: 20px;
`;

const DetailContentText = styled.p`
  ${FONT_STYLES.P_M}
  font-size: 20px;
`;

export {
  DetailContentContainer,
  DetailTitle,
  DetailContentText,
  DetailDate,
  DetailContentBox,
  DetailTitleBox,
};
