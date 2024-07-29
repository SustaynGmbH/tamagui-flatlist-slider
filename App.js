import { config } from '@tamagui/config/v3';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { createTamagui, Slider, TamaguiProvider } from 'tamagui';

const tamaguiConfig = createTamagui(config);

export default function App() {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            <View style={styles.container}>
                <FlatList
                    data={Array(20)}
                    renderItem={(item) => (
                        <View style={{ width: 350, height: 50, margin: 15 }}>
                            <Slider size={30} width={300} defaultValue={[40]} max={100} step={1}>
                                <Slider.Track height={5}>
                                    <Slider.TrackActive backgroundColor="yellowgreen" />
                                </Slider.Track>
                                <Slider.Thumb circular index={0} />
                            </Slider>
                        </View>
                    )}
                />
            </View>
            <StatusBar style="auto" />
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
});
