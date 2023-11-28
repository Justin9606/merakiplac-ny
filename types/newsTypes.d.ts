type NewsType = {
  _id: string;
  index?: number;
  headLine: string;
  newsDate: string;
  reportedSource: string;
  reportedBy: string;
  isScrapped: boolean;
  onPress?: () => void;
  onPressScrapBtn?: () => void;
};
