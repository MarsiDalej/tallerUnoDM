import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
        padding: 8,
        backgroundColor: '#6200ee',
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 12,
      },
      description: {
        fontSize: 15,
        color: "#444",
        lineHeight: 20,
      },
      status: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#007AFF",
      }
});

export default styles;