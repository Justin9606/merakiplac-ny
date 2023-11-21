/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {Image, ImageStyle} from 'react-native';
import Lottie, {AnimationObject} from 'lottie-react-native';

export type AnimationType = {source: string | AnimationObject; uri?: string};
export type AnimationProps = {loop?: boolean; autoPlay?: boolean};
export type ImageSrcType = string;

export interface CustomImageProps {
  image?: ImageSrcType;
  style?: ImageStyle;
  animation?: AnimationType & {props?: AnimationProps; style?: ImageStyle};
}

const CustomImage: React.FC<CustomImageProps> = ({image, style, animation}) => {
  // If there's an animation prop, render a Lottie component
  if (animation && 'source' in animation) {
    const animationSource =
      typeof animation.source === 'string'
        ? {uri: animation.source}
        : animation.source;
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
        source={animationSource}
      />
    );
  }

  // Otherwise, if there's an image prop, render an Image component
  if (!image) {
    return null;
  }
  const imageSource = typeof image === 'number' ? image : {uri: image};
  return <Image style={style} source={imageSource} />;
};

export default memo(CustomImage);
