import "./Attributions.css";

export default function Attributions() {
  return (
    <footer className="footer">
      <p className="footer__attribution">
        Challenge by{" "}
        <a
          className="footer__attribution--link"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="footer__attribution--link"
          href="https://github.com/chowjiaming"
        >
          Joseph Chow
        </a>
        .
      </p>
    </footer>
  );
}
