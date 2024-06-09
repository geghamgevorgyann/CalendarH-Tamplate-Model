import TamplateEditor from "./TamplateEditor/TamplateEditor";
import useStyles from "./styles";
function MainEditor() {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img src="public/Logo.svg" alt="logo" width="20px" height="20px" />
        <p className={styles.title}>CalendarH</p>
      </div>
      <TamplateEditor />
    </div>
  );
}

export default MainEditor;
