import React from "react";
import "../../style/styles.scss";
import "./Footer.scss"

const FooterComponent =() => {
  return (
    <>
      <footer className="bg-footer">
        <p>
          {`Created by `}
          <a className="link-tmdb"
            href="https://github.com/AlejandroGC1990"
            target="_blank"
            rel="noopener noreferrer"
          >
             <strong>
             Alejandro García Carmona
             </strong>
          </a>
          {" y "}
          <a className="link-tmdb"
            href="https://github.com/oscarsangpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
            Óscar Sangrador
            </strong>
          </a>
        </p>
        <p>
          {`Thanks to `}
          <a className="link-tmdb"
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
            The Movie Database
            </strong>
          </a>
          {` for providing the data`}
        </p>
      </footer>
    </>
  );
};

export default FooterComponent;
