import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [result, setResult] = useState("");
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [copy, setCopy] = useState(false);

  const getResult = () => {
    setShow(false);
    setResult(
      `Tulis artikel yang benar-benar unik dan asli di Indonesia tentang kata kunci "${keyword}".  Itu harus dapat dibaca manusia dan berisi judul kreatif (H1), judul dan deskripsi meta SEO, pengantar, judul (dalam H2), subjudul (H3, H4, H5, dan H6), poin-poin atau daftar bernomor (jika diperlukan)  , FAQ, dan kesimpulan.  Pastikan panjang artikel minimal 1600 kata dan bebas dari plagiarisme.  Gunakan kata kunci ${keyword} 5-10 kali di seluruh artikel, termasuk di heading, buat dengan format html tanpa tag head dan body`
    );
    setShow(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShow(false);
      setResult(
        `Tulis artikel yang benar-benar unik dan asli di Indonesia tentang kata kunci "${keyword}".  Itu harus dapat dibaca manusia dan berisi judul kreatif (H1), judul dan deskripsi meta SEO, pengantar, judul (dalam H2), subjudul (H3, H4, H5, dan H6), poin-poin atau daftar bernomor (jika diperlukan)  , FAQ, dan kesimpulan.  Pastikan panjang artikel minimal 1600 kata dan bebas dari plagiarisme.  Gunakan kata kunci ${keyword} 5-10 kali di seluruh artikel, termasuk di heading, buat dengan format html tanpa tag head dan body`
      );
      setShow(true);
    }
  };

  const copyHandler = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="container">
        <h3>
          Keyword generator by <b>Azkal182</b>
        </h3>
        <input
          onChange={(e) => setKeyword(e.target.value)}
          name="result"
          value={keyword}
          type="text"
          placeholder="keyword"
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={() => getResult()}>
          Submit
        </button>
        {show && (
          <div>
            <div>
              <CopyToClipboard text={result} onCopy={() => copyHandler()}>
                <span className="copy">
                  {copy ? "Copied !" : "Copy Keyword"}
                </span>
              </CopyToClipboard>
            </div>
            <textarea name="result" id="" value={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
