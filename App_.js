/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Pressable

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ThemeProvider, { ThemeContext } from './ThemeProvider'

const ThemeConsumer = ThemeContext.Consumer

class App extends React.Component {

  render() {
    return (
      <SafeAreaView>
        <ThemeProvider>
          <ThemeConsumer>
            {theme => {
              return (
                <View>
                  <Pressable
                    onPress={() => {
                      console.log('pressed');
                    }}
                    style={({ pressed }) => ({
                      backgroundColor: pressed ? 'grey' : 'white'
                    })}>
                    <Text style={styles.text}>Press Me!</Text>
                  </Pressable>
                  <Text style={styles[theme]}>{theme}</Text>
                </View>
              )
            }}
          </ThemeConsumer>
        </ThemeProvider>
      </SafeAreaView>
    );
  };
}


const styles = StyleSheet.create({
  dark: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    color: 'black',
  },
  scrollView: {

    width: '100%',
    height: '100%',
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

// import React from 'react';
// import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

// const ThemeContext = React.createContext('light');

// class ThemeProvider extends React.Component {
//   state = { theme: 'light' }
//   toggleTheme = () => {
//     this.setState({
//       theme: this.state.theme === 'light' ? 'dark' : 'light',
//     })
//   }
//   render() {
//     return (
//       <SafeAreaView>
//         <ThemeContext.Provider value={this.state.theme}>
//           <TouchableOpacity onPress={this.toggleTheme}>
//             <Text>toggle theme</Text>
//           </TouchableOpacity>
//           {this.props.children}
//         </ThemeContext.Provider>
//       </SafeAreaView>
//     )
//   }
// }
// // only doing this to shield end-users from the
// // implementation detail of "context"
// const ThemeConsumer = ThemeContext.Consumer

// class App extends React.Component {
//   render() {
//     return (
//       <ThemeProvider>
//         <ThemeConsumer>
//           {theme => <Text style={styles[theme]}>{theme}</Text>}
//         </ThemeConsumer>
//       </ThemeProvider>
//     )
//   }
// }

// const styles = {
//   dark: {
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//     color: 'white',
//   },
//   light: {
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'white',
//     color: 'black',
//   },
// };

// export default App
