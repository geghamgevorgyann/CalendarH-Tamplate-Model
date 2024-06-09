import { createUseStyles } from "react-jss";


const useStyles = createUseStyles(() => ({
    draggableItem: {
        minWidth: 100,
        minHeight: 100,
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'grab',
        '&:hover': {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            border: '1px solid #999',
            transition: 'all 0.3s ease-in-out',
            transform: 'scale(1.1)',

        },
    },
}));

export default useStyles;