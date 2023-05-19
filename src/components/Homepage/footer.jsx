import { Lfoot } from "../footerCom/lfoot";
import { Rfoot } from "../footerCom/rfoot";
export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="lfoot">
          <ul>
            <li>
              <Lfoot ele="Prompt Generator" />
            </li>
            <li>
              <Lfoot ele="Dweep Daily" />
            </li>

            <li>
              <Lfoot ele="All Contributors" />
            </li>
            <li>
              <Lfoot ele="Your data on Dweep.io" />
            </li>
            <li>
              <Lfoot ele="Contribute to Dweep" />{" "}
            </li>
          </ul>
        </div>
        <div className="rfoot"><Rfoot></Rfoot></div>
      </footer>
    </div>
  );
};
