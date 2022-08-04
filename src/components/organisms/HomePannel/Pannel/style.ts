import styled from "styled-components";
import COLOR from "../../../../styles/common/color";
import { FONT_STYLES } from "../../../../styles/common/font-style";

const PannelContainer = styled.div`
  display: flex;
`;

const ListPannelContainer = styled.div`
  width: 50%;
  height: 100vh;
  padding: 30px 0px 30px 30px;
  background-color: ${COLOR.GRAY_0};

  & > div:nth-child(3) {
    position: absolute;
    right: 52%;
    bottom: 30px;
  }
`;

const ListPannelTitle = styled.p`
  ${FONT_STYLES.P_EB}
  font-size: 30px;
`;

const ListContentBox = styled.div`
  padding: 30px 0px;

  & > div:not(:last-child) {
    margin-bottom: 15px;
  }

  .active {
    background-color: white;
  }
`;

export {
  ListPannelContainer,
  ListPannelTitle,
  ListContentBox,
  PannelContainer,
};
