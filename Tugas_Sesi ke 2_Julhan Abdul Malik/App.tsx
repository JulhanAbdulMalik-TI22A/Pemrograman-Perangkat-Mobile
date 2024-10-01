import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';

const App = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.location}>
                        <Text style={{ color: '#B7B7B7', fontWeight: 400, fontSize: 13 }}>
                            Location
                        </Text>
                        <Text style={{ fontWeight: 600, color: '#DDDDDD', fontSize: 14 }}>
                            Sukabumi, Indonesia
                        </Text>
                    </View>
                    <Image
                        source={require('./src/assets/profile.png')}
                        style={styles.profil}
                    />
                </View>
                <TextInput
                    style={styles.search}
                    placeholder="Search Coffee"></TextInput>
                <View style={styles.banner}>
                    <Image
                        source={require('./src/assets/coffee.png')}
                        style={styles.bannercoffee}
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 35,
                            fontWeight: 600,
                            lineHeight: 40,
                            top: -92,
                            left: 15,
                        }}>
                        Buy One Get One FREE
                    </Text>
                    <View style={styles.promo}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 13,
                                paddingVertical: 'auto',
                                fontWeight: 'bold',
                            }}>
                            Promo
                        </Text>
                    </View>
                    <View style={styles.scrollmenu}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#C67C4E',
                                    borderRadius: 12,
                                    width: 'auto',
                                    height: 35,
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    marginEnd: 8,
                                }}>
                                <Text style={{ fontWeight: 600, fontSize: 14, color: 'white' }}>
                                    Cappuccino
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 12,
                                    width: 'auto',
                                    height: 35,
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    marginEnd: 8,
                                }}>
                                <Text style={{}}>Machiato</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 12,
                                    width: 'auto',
                                    height: 35,
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    marginEnd: 8,
                                }}>
                                <Text style={{}}>Latte</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 12,
                                    width: 'auto',
                                    height: 35,
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    marginEnd: 8,
                                }}>
                                <Text style={{}}>Americano</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.cards}>
                        <View style={styles.card1}>
                            <Image
                                source={require('./src/assets/cappuccino.png')}
                                style={{ width: 140, height: 130, borderRadius: 15 }}
                            />
                            <Text style={styles.rating}>
                                <Text style={styles.star}>★</Text> 4.8
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 600,
                                    color: '#2F2D2C',
                                    fontSize: 16,
                                    paddingTop: 5,
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                Cappuccino
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: '#9B9B9B',
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                With Chocolate
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    color: '#2F4B4E',
                                    lineHeight: 40,
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                $4.53
                            </Text>
                            <View style={styles.addButton}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 16,
                                        textAlign: 'center',
                                    }}>
                                    +
                                </Text>
                            </View>
                        </View>
                        <View style={styles.card2}>
                            <Image
                                source={require('./src/assets/Machiato.png')}
                                style={{ width: 140, height: 130, borderRadius: 15 }}
                            />
                            <Text style={styles.rating}>
                                <Text style={styles.star}>★</Text> 4.9
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 600,
                                    color: '#2F2D2C',
                                    fontSize: 16,
                                    paddingTop: 5,
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                Machiato
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: '#9B9B9B',
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                With Oat Milk
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    color: '#2F4B4E',
                                    lineHeight: 40,
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                $3.90
                            </Text>
                            <View style={styles.addButton}>
                                <Text
                                    style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                                    +
                                </Text>
                            </View>
                        </View>
                        <View style={styles.card3}>
                            <Image
                                source={require('./src/assets/latte.png')}
                                style={{ width: 140, height: 130, borderRadius: 15 }}
                            />
                            <Text style={styles.rating}>
                                <Text style={styles.star}>★</Text> 4.5
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 600,
                                    color: '#2F2D2C',
                                    fontSize: 16,
                                    paddingTop: 5,
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                Latte
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: '#9B9B9B',
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                With Milk
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    color: '#2F4B4E',
                                    lineHeight: 40,
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                $5.25
                            </Text>
                            <View style={styles.addButton}>
                                <Text
                                    style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                                    +
                                </Text>
                            </View>
                        </View>
                        <View style={styles.card4}>
                            <Image
                                source={require('./src/assets/americano.png')}
                                style={{ width: 140, height: 130, borderRadius: 15 }}
                            />
                            <Text style={styles.rating}>
                                <Text style={styles.star}>★</Text> 4.0
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 600,
                                    color: '#2F2D2C',
                                    fontSize: 16,
                                    paddingTop: 5,
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                Americano
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: '#9B9B9B',
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                Original Coffee
                            </Text>
                            <Text
                                style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    color: '#2F4B4E',
                                    lineHeight: 40,
                                    paddingStart: 5,
                                    top: -15,
                                }}>
                                $4.50
                            </Text>
                            <View style={styles.addButton}>
                                <Text
                                    style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                                    +
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default App;
