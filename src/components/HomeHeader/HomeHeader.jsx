import "./HomeHeader.css";

function HomeHeader() {
  return (
    <div className="home-header">
      <img src="././logo.png" alt="logo" />
      <h1>
        Dream it.
        <br />
        Rent it. Buy it.
      </h1>
      <div  >
         <form className="search-bar">
        <input
          type="text"
          placeholder="Search..."
        />
        <button type="submit">
          <span role="img" aria-label="search">
            <img
              src="https://img.icons8.com/fluency/48/search.png"
              alt="search"
            />
          </span>
        </button>
      </form>
      </div>
     
    </div>
  );
}
export default HomeHeader;