/* eslint-disable prettier/prettier */
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function SettingScreen({navigation}) {
    return (
      <View style={styles.layoutStyle}>
        <View style={styles.buttonStyle}>
          {/* <Text children="Detail Screen" /> */}
          {/* <Button title="설정화면 재진입"
                  onPress={() => navigation.push('SETTING')
          } />
          <Button title="홈으로" onPress={() => navigation.navigate('HOME')} /> */}
          {/*goback을 pop으로 바꿔도 똑같은 기능임, 주석을 다른 컴포넌트 앞이나 뒤에 쓰면 오류남 */}
          <Button title="뒤로" onPress={() => navigation.pop() } />
          <Button title="최초화면으로" onPress={() => navigation.popToTop()} />
        </View>
        <View style={styles.mainStyle}>
          <Text children="Setting UI Layout" />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    layoutStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
    mainStyle: {
        backgroundColor: '#e9e9e9',
        flex: 1,
    },
});

export default SettingScreen;
