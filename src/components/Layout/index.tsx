import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { safeAreaViewStyles, headerViewStyles, bodyViewStyles } from './style';
import CustomBtn from '../CustomBtn';

interface IProps {
  title?: string;
  isBack?: boolean;
}

const Layout: React.FC<IProps> = props => {
  const { goBack } = useNavigation();
  const { children, title, isBack } = props;

  const renderHeader = () => {
    if (!title && !isBack) return null;

    const renderBackBtn = () => {
      if (!isBack) return null;
      return (
        <View style={headerViewStyles.backBtnView}>
          <CustomBtn
            variant="text"
            label="Back"
            onPress={goBack}
            svgIconProps={{ name: 'ArrowBackIos' }}
            overrideStyle={{ btnText: headerViewStyles.backBtnText }}
          />
        </View>
      );
    };

    return (
      <View style={headerViewStyles.container}>
        <Text style={headerViewStyles.text}>{title}</Text>
        {renderBackBtn()}
      </View>
    );
  };

  return (
    <SafeAreaView style={safeAreaViewStyles.container}>
      {renderHeader()}
      <KeyboardAwareScrollView
        contentContainerStyle={bodyViewStyles.container}
        keyboardShouldPersistTaps="always">
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Layout;
