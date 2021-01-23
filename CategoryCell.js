import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {kFullRender, KHalfrender} from './CategoryCellConstant';
  import Stars from 'react-native-stars';

  const Cell = ({item,renderType,styleProps}) => (
  <View
    style={{
      backgroundColor: styleProps.cellBackGroundColor,
      width: renderType === KHalfrender? wp(90) : wp(90),
      height: hp(15),
      margin: styleProps.margin,
      borderRadius:styleProps.cornerRadiusCell,
      overflow: 'hidden',
    }}>
    <View style={{flex: 1}}>
      <View
        style={{flex: 2 / 3, alignItems: 'center', justifyContent: 'center'}}>
      
          <Stars
    default={1}
    count={5}
    spacing={wp(2.20)}

    half={true}
    starSize={5} 
    fullStar={<Image source={require('./Vector.png')} style={{width:wp(5.514),height:wp(5.314)}}/>}
    emptyStar={<Image source={require('./unselectedStar.png')} style={{width:wp(5.514),height:wp(5.314)}}/>}
  />
      </View>
      <View
        style={{
          flex: 1 / 3,
          backgroundColor: styleProps.cellLabelColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{item.key}</Text>
      </View>
    </View>
  </View>
);
export default Cell


// height: 17.434999465942383px;
// width: 18.088233947753906px;
// left: 1.808837890625px;
// top: 1.83331298828125px;
// border-radius: 1px;
