import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles(() => ({
    main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fcfcfc',
    },
    header: {
        display: 'flex',
        alignItems: 'center', 
        gap: '2px', 
    },
    title: {
       color: '#299D8F',
       fontWeight: 'bold',
       fontSize: '20px',
    },
}));

export default useStyles;
