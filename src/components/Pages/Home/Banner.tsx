import styles from "../../../../styles/Home.module.scss";


const Banner = () => {
    return (
      <section className={styles.banner}>
        <div>
          <h1>{`This is my Store!`}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    );
  };

  export default Banner