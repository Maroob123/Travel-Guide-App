import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../consts/colors';
const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/onboardImage.jpg')}>
        <View style={style.details}>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            Discover
          </Text>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            Pakistan with us
          </Text>
          <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15}}>
          We offer all sorts of ground handling services i.e. online hotel booking, tour packages, & renting a car.{'\n'}
          we believe that your decision to travel with flypakistan is based on our ability to provide efficient & effective travel management with a unique solution.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold'}}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '100%',
    paddingHorizontal: 40,
    paddingBottom: 10,
    justifyContent: 'flex-end',
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoardScreen;
