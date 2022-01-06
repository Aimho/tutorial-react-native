import React from 'react';
import { SvgCss } from 'react-native-svg';
import { ArrowBackIos } from '../../resources/svg';
import { TIconName } from './type';

interface IProps {
  name: TIconName;
  width?: number;
  height?: number;
  color?: string;
}

const SvgIcon = (props: IProps) => {
  const { name, width, height, color } = props;

  switch (name) {
    case 'ArrowBackIos':
      return (
        <SvgCss fill={color} width={width} height={height} xml={ArrowBackIos} />
      );
    default:
      return null;
  }
};

SvgIcon.defaultProps = {
  width: 24,
  height: 24,
  color: '#fff',
};

export default SvgIcon;
