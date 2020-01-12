import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
    },

    input: {
        marginTop: 20,
        height: 50,
    },

    button: {
        backgroundColor: '#0085FF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 30,
        borderRadius: 5,
    },

    textbtn: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    textRegister: {
        color: '#005AAD',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Styles;
