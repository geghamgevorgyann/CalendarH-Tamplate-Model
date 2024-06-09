import DraggableItem from "./DraggableItem/DraggableItem";
import useStyles from "./styles";

function Sidebar() {

    const styles = useStyles();

    return (
        <div className={styles.sidebar}>
            <DraggableItem id={'item1'} textContent={'Heading'} />
            <DraggableItem id={'item2'} textContent={'Paragraph'} />
            <DraggableItem id={'item3'} textContent={'Button'} />
            <DraggableItem id={'item4'} textContent={'Image'} />
            <DraggableItem id={'item5'} textContent={'Input options'} />
        </div>
    );
}

export default Sidebar