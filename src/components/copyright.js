import "./copyright.css";

const Copyright = () => {
  return (
    <p className="copyright">
      @ Família de Magí Pomés, {new Date().getFullYear()}. Created with ❤ by{" "}
      <a href="https://eduvallve.com" target="_blank" rel="noreferrer">
        eduvallve.com
      </a>
    </p>
  );
};

export default Copyright;
