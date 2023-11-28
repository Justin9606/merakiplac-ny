type WebViewParams = {
  title: string;
  WebViewUrl: string;
  originWhitelist?: string[];
} & NewsType;

type MainStackType = {
  WebViewScreen: WebViewParams;
};
