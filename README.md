# React-Native Tutorial

windows, android 환경으로 테스트함

### 환경설정

참고: https://jeffgukang.github.io/react-native-tutorial/docs/basic-tutorial/basic-functions/01-basic-setting/basic-settings-kr.html

1. Node, Python2, JDK 설치
2. React Native Cli 설치
3. Android Studio 설치
   - Install: Android SDK, Android SDK platform, Performance(Intel HAXM), Android Virtual Device
   - DeviceOS: `Android 9(Pie)`
   - SDK Platforms: 오른쪽 하단 `Show Package Details` - Android 9(`Android SDK Platform 28`, `Intel x86 Atom_64 System Image`, `Google APIs Intel x86 Atom System Image`)
   - SDK Tools: 오른쪽 하단 `Show Package Details` - Android SDK Build-Tools(`28.0.3`)
4. 환경변수 추가
   - ANDROID_HOME: `c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk`
   - path, platform-tools: `c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools`
5. AVD Manager 가상 디바이스 추가

   - Device 선택
   - OS Pie API Level 28 image 선택
   - 참고: AVD 가상 디바이스 설치 안될 시 BIOS `Intel Virtualization Technology` 값 `enable` 인지 확인필요

### Clone Cryptosx

- [x] Sign In UI
- [x] Sign Up, Forgot Password UI

### 경험

- react-navigation 사용법
- react-native style 적용(flex box)
- react-native에서 SVG 사용 방법
- input native keyboard 노출 시 UI 영역 변경되는 이슈 해결 방법(android)
