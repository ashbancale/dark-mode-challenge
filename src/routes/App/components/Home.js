import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Main, Wrapper, Title } from "../styles/globalStyle";

export default function Home(props) {
  const { theme, toggleTheme } = props;

  const changeTheme = () => {
    if (theme === "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  };

  const themeIcon =
    theme === "light" ? (
      <FontAwesomeIcon icon={faMoon} />
    ) : (
      <FontAwesomeIcon icon={faSun} className="light-mode-btn" />
    );

  return (
    <Main>
      <Wrapper>
        <div className="level">
          <div>
            <Title>Dark Mode Challenge</Title>
          </div>

          {/* --The button that should toggle dark mode-- */}
          <button
            className="dark-mode-btn icon level-right"
            onClick={changeTheme}
          >
            {themeIcon}
          </button>
        </div>

        <div className="columns">
          <div className="column">
            <p>
              Lollipop powder powder. Cotton candy caramels chupa chups halvah
              muffin caramels apple pie topping cake. Topping chocolate bar
              pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing
              sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant
              apple pie pudding caramels wafer tart tootsie roll macaroon.
              Croissant tiramisu chocolate bar carrot cake lemon drops halvah.
            </p>
          </div>
          <div className="column">
            <p>
              Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
              tart. Muffin chupa chups pie. Brownie apple pie topping lemon
              drops marzipan toffee. Pudding macaroon icing ice cream bonbon
              cake tart. Pudding sugar plum chocolate cake cake biscuit pastry
              pastry chocolate bar tart. Lemon drops dessert gummies icing.
            </p>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Email" />
          </div>
        </div>

        <section className="section">
          <div className="buttons level-right">
            <a className="button is-primary">Save</a>
            <a className="button is-link">Submit</a>
          </div>
        </section>
      </Wrapper>
    </Main>
  );
}
