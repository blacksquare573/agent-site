import "./RegisterBackground.styles.css";

const RegisterBackground = () => {
  return (
    <div>
      <div className="navigation-bar-container">navigation bar</div>
      <div className="header-and-input-background">
        <div className="header-container">header</div>
        <div className="input-area">
          <form>
            <select className="select-agent-button">
              <option>op1</option>
              <option>op2</option>
              <option>op3</option>
            </select>
            <br />
            姓
            <input
              className="input-first-name"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("姓（漢字）を入力してください")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            名
            <input
              className="input-last-name"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("名（漢字）を入力してください")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            姓（フリガナ）
            <input
              className="input-first-name-kana"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("姓（フリガナ）を入力してください")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            名（フリガナ）
            <input
              className="input-last-name-kana"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("名（フリガナ）を入力してください")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <input type="radio" name="gender" />
            男性
            <input type="radio" name="gender" />
            女性
            <input type="radio" name="gender" />
            その他
            <input type="radio" name="gender" />
            回答しない
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterBackground;
