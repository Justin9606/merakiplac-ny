import {CustomHeader} from 'components/header';
import React from 'react';
import WebView from 'react-native-webview';

type WebviewParams = {
  WebViewUrl: string;
  title: string;
  originWhitelist?: string[];
};

const WebViewScreen: React.FC<WebviewParams> = ({route}: any) => {
  const params = {...route.params, ...(route.params?.params || {})};
  const {WebViewUrl, title, originWhitelist} = params;

  return (
    <>
      <CustomHeader
        title={title}
        headerType={'native'}
        leftBtnType="arrowLeft"
      />
      <WebView
        originWhitelist={originWhitelist ? originWhitelist : undefined}
        allowsInlineMediaPlayback
        startInLoadingState
        decelerationRate="normal"
        source={{
          uri: WebViewUrl,
        }}
      />
    </>
  );
};

export default WebViewScreen;
