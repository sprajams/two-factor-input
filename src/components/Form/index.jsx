import { useState } from "react";
import styles from "./styles.module.scss";
function Form() {
  const [input, setInput] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });
  const { digit1, digit2, digit3, digit4 } = input;
  const onChange = (e) => {
    let inputVal = Number(e.target.value);
    setInput({ ...input, [e.target.name]: inputVal });
  };

  console.log(input);
  return (
    <div>
      <h2>Form</h2>
      <form>
        <div className={styles.inputValWrap}>
          <input
            type="number"
            name="digit1"
            value={digit1}
            min="0"
            max="9"
            required
            onChange={onChange}
            // prevent input of keys other than 0-9
            onKeyDown={(e) =>
              ["e", "E", "+", ".", "-"].includes(e.key) && e.preventDefault()
            }
          ></input>
          <input
            type="number"
            name="digit2"
            value={digit2}
            min="0"
            max="9"
            required
            onChange={onChange}
            onKeyDown={(e) =>
              ["e", "E", "+", ".", "-"].includes(e.key) && e.preventDefault()
            }
          ></input>
          <input
            type="number"
            name="digit3"
            value={digit3}
            min="0"
            max="9"
            required
            onChange={onChange}
            onKeyDown={(e) =>
              ["e", "E", "+", ".", "-"].includes(e.key) && e.preventDefault()
            }
          ></input>
          <input
            type="number"
            name="digit4"
            value={digit4}
            min="0"
            max="9"
            required
            onChange={onChange}
            onKeyDown={(e) =>
              ["e", "E", "+", ".", "-"].includes(e.key) && e.preventDefault()
            }
          ></input>
        </div>
        <input type="submit" value="Submit" className={styles.submitBtn} />
      </form>
    </div>
  );
}

export default Form;
