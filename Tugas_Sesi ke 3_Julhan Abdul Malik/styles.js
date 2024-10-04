import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 5,
        marginHorizontal: 10,
    },

    header: {
        flexDirection: 'row',
        marginTop: 10,
    },

    location: {
        fontWeight: 'bold',
        flexDirection: 'column',
    },

    profil: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginStart: 150,
        borderWidth: 2,
        borderColor: 'grey',
    },

    judul: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'black',
    },

    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        gap: 5,
    },

    textInput: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },

    pressable: {
        marginTop: 5,
        backgroundColor: 'green',
        width: 90,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        height: 40,
    },

    kolomInput: {
        marginTop: 5,
        width: 240,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'grey',
        paddingHorizontal: 15,
    },

    header2: {
        marginTop: 5,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#000',
        paddingBottom: 5,
    },

    cell: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
    },

    row: {
        color: 'black',
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    cell2: {
        flex: 1,
        fontSize: 14,
        color: 'black',
    },

    buttonEdit: {
        fontSize: 12,
        padding: 1,
        height: 30,
        borderRadius: 5,
        width: 50,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },

    buttonDelete: {
        fontSize: 12,
        padding: 1,
        height: 30,
        borderRadius: 5,
        width: 60,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginLeft: 10,
    },

});

export default styles;