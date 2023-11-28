import React, {memo} from 'react';
import styled from 'styled-components/native';
import {colors} from 'constants/colors';
import CustomImage from 'components/common/CustomImage';
import {Spacer, TouchableOpacityBtn} from 'components/common';
import {ActiveStar, InActiveStar} from 'assets';

type Props = {
  index?: number;
} & NewsType;

const NewsList: React.FC<Props> = ({
  index,
  _id,
  headLine,
  newsDate,
  reportedSource,
  reportedBy,
  isScrapped,
  onPress,
  onPressScrapBtn,
}) => {
  return (
    <NewsWrapper id={_id} onPress={onPress} index={index}>
      <HeadLineWrapper>
        <HeadLine numberOfLines={2}>{headLine}</HeadLine>
        <TouchableOpacityBtn onPress={onPressScrapBtn}>
          <CustomImage image={isScrapped ? ActiveStar : InActiveStar} />
        </TouchableOpacityBtn>
      </HeadLineWrapper>
      <ReportedByWrapper>
        <ReportedByContainer>
          <ReportedBy>{reportedSource}</ReportedBy>
          <Spacer width={8} />
          <ReportedBy>{reportedBy}</ReportedBy>
        </ReportedByContainer>
        <NewsDate>{newsDate}</NewsDate>
      </ReportedByWrapper>
    </NewsWrapper>
  );
};

export default memo(NewsList);

const NewsWrapper = styled(TouchableOpacityBtn)<{index?: number}>`
  display: flex;
  background-color: ${colors.white};
  border-radius: 8px;
  margin-horizontal: 20px;
  margin-top: ${props => (props.index === 0 ? 20 : 8)}px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  gap: 8px;
`;

const HeadLineWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const HeadLine = styled.Text`
  color: ${colors.black};
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  width: 280px;
  text-transform: uppercase;
`;
const ReportedByWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ReportedByContainer = styled.View`
  flex-direction: row;
`;

const ReportedBy = styled.Text`
  color: ${colors.black};
  font-family: Apple SD Gothic Neo;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const NewsDate = styled.Text`
  text-align: right;
`;
