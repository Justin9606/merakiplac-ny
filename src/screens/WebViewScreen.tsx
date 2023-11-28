import React from 'react';
import WebView from 'react-native-webview';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomHeader} from 'components/header';

type Props = StackScreenProps<MainStackType, 'WebViewScreen'>;

const WebViewScreen: React.FC<Props> = ({route}) => {
  const {WebViewUrl, title, originWhitelist} = route.params;

  return (
    <>
      <CustomHeader
        title={title}
        headerType={'native'}
        leftBtnType="arrowLeft"
      />
      <WebView
        originWhitelist={originWhitelist || ['*']}
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
