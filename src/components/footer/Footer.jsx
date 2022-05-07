import React from "react";
import "../../style/styles.scss";
import "./Footer.scss"

const Footer =() => {
  return (
    <>
      <footer className="bg-footer">
        <p>
          {`App created by `}
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
          {`Gracias a `}
          <a className="link-tmdb"
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
            The Movie Database
            </strong>
          </a>
          {` por ofrecernos los datos`}
        </p>
      </footer>
    </>
  );
};

export default Footer;
