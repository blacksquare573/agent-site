import "./SearchPage.styles.css";
import "../../scss/bootstrap.css";
import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

const SearchPage = () => {
  const [active, setActive] = useState(false);
  const windowSize = useWindowSize();
  console.log(windowSize);
  const dropdownHandler = () => {
    // console.log(active);
    setActive(!active);
  };

  return (
    <div className="jobsite-homepage">
      <header>
        <div className="head">
          <div className="left">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                onClick={(event) => dropdownHandler()}
              >
                メニュー
              </a>
              <ul
                className={`dropdown-menu ${
                  active ? "dropdown-menu-active" : null
                }`}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    求人一覧
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    求人問い合わせ一覧
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    紹介者管理
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    紹介者登録
                  </a>
                </li>
              </ul>
            </div>
            <div className="logo">求人サイト</div>
            <div className="introducer">紹介者管理</div>
          </div>
          <div className="login">ログイン</div>
        </div>
      </header>
      {windowSize.width > 414 && (
        <nav>
          <ul>
            <li>求人一覧</li>
            <li>求人問い合わせ一覧</li>
            <li>紹介者管理</li>
            <li>紹介者登録</li>
          </ul>
        </nav>
      )}
      <main>
        <div className="search">
          <div className="name">
            <div className="left">
              <span className="text">名前</span>:
            </div>
            <div className="right">
              <input type="text" />
            </div>
          </div>
          <div className="age">
            <div className="left">
              <span className="text">年齢</span>:
            </div>
            <div className="right">
              <input type="text" />
            </div>
          </div>
          <div className="sex">
            <div className="left">
              <span className="text">性別</span>:
            </div>
            <div className="right">
              <input type="text" />
            </div>
          </div>
          <div className="person">
            <div className="left">
              <span className="text">紹介者区分</span>:
            </div>
            <div className="right">
              <button>
                <span>項目1</span>
              </button>
              <button>
                <span>項目2</span>
              </button>
              <button>
                <span>項目3</span>
              </button>
            </div>
          </div>
          <div className="checkbox">
            <div className="left">
              <span className="text">既読/未読</span>:
            </div>
            <div className="checkbox-right">
              <label className="checkmessage">
                <input type="checkbox" className="checklabel-input" />
                <span className="checkmark">既読</span>
              </label>
              <label className="checkmessage">
                <input type="checkbox" className="checklabel-input" />
                <span className="checkmark">未読</span>
              </label>
            </div>
          </div>
        </div>
        <div className="introduce">
          <div className="details">
            <div className="left">
              <div className="image">
                <img
                  src="https://www.nitori-net.jp/ecstatic/include/feature/img22/ncool/TopTk_bnr_pc.jpg"
                  alt=""
                />
              </div>
              <div className="middle">
                <div className="middle-top">
                  <span className="top-date">2022.02.02-2022.02.02</span>
                  <span className="top-category">カテゴリ名</span>
                  <span className="top-name">ここに署名が入ります</span>
                </div>
                <div className="middle-bottom">
                  <span>
                    見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <button>紹介する</button>
            </div>
          </div>
          <div className="details">
            <div className="left">
              <div className="image">
                <img
                  src="https://www.nitori-net.jp/ecstatic/include/feature/img22/ncool/TopTk_bnr_pc.jpg"
                  alt=""
                />
              </div>
              <div className="middle">
                <div className="middle-top">
                  <span className="top-date">2022.02.02-2022.02.02</span>
                  <span className="top-category">カテゴリ名</span>
                  <span className="top-name">ここに署名が入ります</span>
                </div>
                <div className="middle-bottom">
                  <span>
                    見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <button>紹介する</button>
            </div>
          </div>
          <div className="details">
            <div className="left">
              <div className="image">
                <img
                  src="https://www.nitori-net.jp/ecstatic/include/feature/img22/ncool/TopTk_bnr_pc.jpg"
                  alt=""
                />
              </div>
              <div className="middle">
                <div className="middle-top">
                  <span className="top-date">2022.02.02-2022.02.02</span>
                  <span className="top-category">カテゴリ名</span>
                  <span className="top-name">ここに署名が入ります</span>
                </div>
                <div className="middle-bottom">
                  <span>
                    見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります見出しが入ります
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <button>紹介する</button>
            </div>
          </div>
        </div>
        <div className="jobsite-pagination">
          <span> ＜ </span>
          <ul className="jobsite-pagination-ul">
            <li>
              <span className="jobsite-pagination-active">1</span>
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <span> ＞ </span>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
};
export default SearchPage;
