/* eslint-disable react-native/no-inline-styles */
import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageStyle,
  ImageResizeMode,
  ViewStyle,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import Lottie, {AnimationObject} from 'lottie-react-native';
import {OS} from 'utils/utility';

type AnimationType = {source: AnimationObject} | {uri: string};
type AnimationProps = {loop?: boolean; autoPlay?: boolean};
type ImageSrcType = {ios: string; aos: string} | string;

interface CustomImageProps {
  image: ImageSrcType;
  style?: ImageStyle;
  svgStyle?: ViewStyle;
  animation?: AnimationType & {props?: AnimationProps; style?: ViewStyle};
  isFullSize?: boolean;
  imageResizeMode?: ImageResizeMode;
}

const OS_KEY = OS === 'android' ? 'aos' : 'ios';

const getImageSource = (image: ImageSrcType) => {
  if (typeof image === 'string') {
    return image;
  }
  if ('ios' in image && 'aos' in image) {
    return image[OS_KEY];
  }
  return '';
};

const CustomImage: React.FC<CustomImageProps> = ({
  image,
  style,
  svgStyle,
  animation,
  isFullSize,
  imageResizeMode,
}) => {
  const [imageSize, setImageSize] = useState({});
  const [componentWidth, setComponentWidth] = useState(0);

  const imageSource = getImageSource(image);

  useEffect(() => {
    if (
      imageSource &&
      typeof imageSource === 'string' &&
      componentWidth > 0 &&
      isFullSize
    ) {
      Image.getSize(imageSource, (width, height) => {
        setImageSize({
          width: componentWidth,
          height: (height * componentWidth) / width,
        });
      });
    }
  }, [imageSource, componentWidth, isFullSize]);

  const renderImage = () => {
    if (!imageSource) {
      return null;
    }
    if (imageSource.endsWith('.svg')) {
      return (
        <SvgUri
          width={svgStyle?.width || style?.width || 0}
          uri={imageSource}
          style={svgStyle || style}
        />
      );
    }
    return (
      <Image
        style={[{overlayColor: 'white', ...style}, imageSize]}
        source={{uri: imageSource}}
        resizeMode={imageResizeMode || 'cover'}
      />
    );
  };

  const renderAnimation = () => {
    if (!animation) {
      return null;
    }
    const animationSrc = 'uri' in animation ? animation.uri : animation.source;
    return (
      <Lottie
        autoPlay={true}
        loop={true}
        {...animation.props}
        style={{
          aspectRatio: 3 / 2,
          height: 'auto',
          width: '100%',
          ...animation.style,
        }}
        resizeMode="cover"
        source={animationSrc}
      />
    );
  };

  return (
    <View
      onLayout={({nativeEvent}) => {
        const {width} = nativeEvent.layout;
        if (width !== componentWidth) {
          setComponentWidth(width);
        }
      }}>
      {animation ? renderAnimation() : renderImage()}
    </View>
  );
};

export default memo(CustomImage);
