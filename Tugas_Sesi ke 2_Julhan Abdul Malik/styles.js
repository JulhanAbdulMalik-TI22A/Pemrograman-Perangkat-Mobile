import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#131313',
        fontFamily: 'sora',
    },

    header: {
        flexDirection: 'row',
    },

    location: {
        fontWeight: 'bold',
        flexDirection: 'column',
    },

    profil: {
        width: 44,
        height: 44,
        borderRadius: 10,
        marginStart: 150,
    },

    search: {
        marginTop: 15,
        width: 315,
        height: 40,
        borderRadius: 16,
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },

    banner: {
        marginTop: 15,

    },

    bannercoffee: {
        width: 315,
        height: 140,
        borderRadius: 15,
    },

    promo: {
        width: 60,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 5,
        top: -205,
        left: 15,
    },

    scrollmenu: {
        width: 315,
        marginTop: -83,
    },

    cards: {
        paddingVertical: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    card1: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingBottom: 10,
        paddingTop: 5,
        width: 150,
        height: 230,
        borderRadius: 16,
        marginBottom: 15,
    },

    card2: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingBottom: 10,
        paddingTop: 5,
        width: 150,
        height: 230,
        borderRadius: 16,
        marginStart: 15,
        marginBottom: 15,
    },

    card3: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingBottom: 10,
        paddingTop: 5,
        width: 150,
        height: 230,
        borderRadius: 16,
        marginBottom: 15,
    },

    card4: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingBottom: 10,
        paddingTop: 5,
        width: 150,
        height: 230,
        borderRadius: 16,
        marginBottom: 15,
        marginStart: 15,
    },

    addButton: {
        backgroundColor: '#C67C4E',
        padding: 5,
        borderRadius: 10,
        width: 32,
        height: 32,
        left: 100,
        top: -50,
    },

    rating: {
        color: 'white',
        fontWeight: 'bold',
        top: -125,
        left: 10,
        fontSize: 11,
    },

    star: {
        color: 'gold',
    },
});

export default styles;
