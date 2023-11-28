type NewsType = {
  _id: string;
  index?: number;
  headline: string;
  pub_date: string;
  source: string;
  byline: string;
  isScrapped: boolean;
  onPress?: () => void;
  onPressScrapBtn?: () => void;
};
