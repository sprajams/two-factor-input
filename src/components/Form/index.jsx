import styles from "./styles.module.scss";
function Form() {
  return (
    <div>
      <h2>Form</h2>
      <form>
        <div className={styles.inputValWrap}>
          <input type="number" name="digit1" min="0" max="9"></input>
          <input type="number" name="digit2" min="0" max="9"></input>
          <input type="number" name="digit3" min="0" max="9"></input>
          <input type="number" name="digit4" min="0" max="9"></input>
        </div>
        <input type="submit" value="Submit" className={styles.submitBtn} />
      </form>
    </div>
  );
}

export default Form;
