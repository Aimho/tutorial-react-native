import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  GestureResponderEvent,
  View,
  ViewStyle,
} from 'react-native';
import SvgIcon from '../SvgIcon';
import { ISvgIconProps } from '../SvgIcon/type';
import { wrapperStyles, btnContainerStyles, btnTextStyles } from './style';

interface IProps {
  label: string;
  variant?: 'contain' | 'outlined' | 'text';
  fullWidth?: boolean;
  svgIconProps?: ISvgIconProps;
  overrideStyle?: {
    btnContainer?: StyleProp<ViewStyle>;
    btnText?: StyleProp<TextStyle>;
  };
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomBtn = (props: IProps) => {
  const { label, variant, fullWidth, svgIconProps, overrideStyle, onPress } =
    props;

  const wrapperStyle = [!fullWidth && wrapperStyles.fullWidth];

  const btnContainerStyle = [
    btnContainerStyles.common,
    btnContainerStyles[variant],
    overrideStyle?.btnContainer,
  ];

  const btnTextStyle = [
    btnTextStyles.common,
    btnTextStyles[variant],
    overrideStyle?.btnText,
  ];

  return (
    <View style={wrapperStyle}>
      <TouchableOpacity style={btnContainerStyle} onPress={onPress}>
        <SvgIcon {...svgIconProps} />
        <Text style={btnTextStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

CustomBtn.defaultProps = {
  variant: 'contain',
  fullWidth: false,
};

export default CustomBtn;
