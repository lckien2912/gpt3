import styles from "./scrollTop.module.scss";

const ScrollTop = () => {
  return (
    <button
      type="button"
      className={styles.scrollTop}
      onClick={() => window.scrollTo(0, 0)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-chevrons-up"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 11l5 -5l5 5"></path>
        <path d="M7 17l5 -5l5 5"></path>
      </svg>
    </button>
  );
};

export default ScrollTop;
