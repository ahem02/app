import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenue dans l'application RED CELL ! yo bitch </Text>
      <StatusBar style="auto" />
      <View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
