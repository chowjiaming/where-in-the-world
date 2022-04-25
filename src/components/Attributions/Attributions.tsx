import './Attributions.css';

const Attributions: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer__attribution">
        Inspired by{' '}
        <a
          className="footer__attribution--link"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
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
};

export default Attributions;
