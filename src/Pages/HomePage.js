import { Heading } from "../components/Homepage/Lheader";
import { Footer } from "../components/Homepage/footer";
import { ImageCom } from "../components/Homepage/ImageCom";
export const HomePage = () => {
  return (
    <div>
      <div id="container">
        <div className="left">
          <Heading/>
        </div>
        <div className="right">
          <ImageCom></ImageCom>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
