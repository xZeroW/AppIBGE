import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight+20
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
    marginLeft: 10,
    color: '#13131A',
    fontWeight: 'bold'
  },

  Input: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 15,
    borderRadius: 3,
    marginTop: 10,
    marginBottom: 10
  }
})