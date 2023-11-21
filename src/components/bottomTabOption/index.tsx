/* eslint-disable react/react-in-jsx-scope */
import CustomImage, {ImageSrcType} from 'components/common/CustomImage';

type TabIconProps = {
  focused: boolean;
};

type TabOptionFunction = (
  activeIcon: ImageSrcType,
  inactiveIcon: ImageSrcType,
  title: string,
) => {
  tabBarIcon: (props: TabIconProps) => JSX.Element;
  title: string;
};
export const createTabOptions: TabOptionFunction = (
  activeIcon,
  inactiveIcon,
  title,
) => ({
  tabBarIcon: ({focused}) => (
    <CustomImage image={focused ? activeIcon : inactiveIcon} />
  ),
  title,
});
