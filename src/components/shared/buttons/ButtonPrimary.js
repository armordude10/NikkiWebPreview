import Link from "next/link";

const ButtonPrimary = ({ text, path, button, type }) => {
  const actualType = type ? { type } : {};

  return (
    <>
      {path ? (
        <Link
          className={`default__button font-montserrat ${
            button === "blue"
              ? "btn__blue"
              : button === "white"
              ? " btn__white"
              : button === "black"
              ? "btn__black"
              : button === "pink"
              ? "btn-brand-pink"
              : button === "purple"
              ? "btn-brand-purple"
              : button === "teal"
              ? "btn-brand-teal"
              : button === "gold"
              ? "btn-brand-gold"
              : ""
          }`}
          href={path}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`default__button font-montserrat ${
            button === "blue"
              ? "btn__blue"
              : button === "white"
              ? "btn__white"
              : button === "black"
              ? "btn__black"
              : button === "pink"
              ? "btn-brand-pink"
              : button === "purple"
              ? "btn-brand-purple"
              : button === "teal"
              ? "btn-brand-teal"
              : button === "gold"
              ? "btn-brand-gold"
              : ""
          }`}
          {...actualType}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default ButtonPrimary;
