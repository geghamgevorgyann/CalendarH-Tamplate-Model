import DropArea from "../DropArea/DropArea"
import useStyles from "./styles";

function TamplateEditor() {

    const styles = useStyles();
    return (
        <div className={styles.container}>
            <p className={styles.title}>Template Editor</p>
            <DropArea />
            <DropArea />
            <DropArea />
            <DropArea />
            <DropArea />
            <DropArea />
        </div>
    )
}

export default TamplateEditor