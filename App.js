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

import Cell from './CategoryCell';
import {kFullRender, KHalfrender} from './CategoryCellConstant';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {key: 'Business & Office'},
          {key: 'Devices'},
          {key: 'Education'},
          {key: 'Entertainment'},
          {key: 'Business & Office'},
          {key: 'Devices'},
          {key: 'Education'},
          {key: 'Entertainment'},
        ]}
        keyExtractor={(item) => item.key}
        horizontal={false}
        renderItem={({item}) => (
          <Cell
            item={item}
            renderType={KHalfrender}
            styleProps={{
              cellBackGroundColor: 'black',
              margin: 4,
              cornerRadiusCell: 4,
              cellLabelColor: '#d59347',
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
