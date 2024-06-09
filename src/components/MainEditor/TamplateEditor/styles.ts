import { createUseStyles } from "react-jss";


const useStyles = createUseStyles(() => ({
    container: {
        width: '100%',
        height: '100%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        maxWidth: '600px',
        maxHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#7F56D9',
        textAlign: 'center'
    },
}));

export default useStyles