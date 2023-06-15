import * as Styles from "./style";
import RollOuts from "../../../assets/Icons/RollOuts.svg";
import AmsSap from "../../../assets/Icons/AmsSap.svg";
import Convercao from "../../../assets/Icons/Convercao.svg";
import Discovery from "../../../assets/Icons/Discovery.svg";
import Implementacao from "../../../assets/Icons/Implementacao.svg";
import InfraestruturaSap from "../../../assets/Icons/InfraestruturaSap.svg";
import Integracao from "../../../assets/Icons/Integracao.svg";
import MelhoriasSap from "../../../assets/Icons/MelhoriasSap.svg";
import Upgrade from "../../../assets/Icons/Upgrade.svg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.css";

export const Modules = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 20,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <Styles.Main>
      <div ref={sliderRef} className="keen-slider">
        <img src={Upgrade} alt="Icons" className="keen-slider__slide slide" />
        <img src={RollOuts} alt="Icons" className="keen-slider__slide slide" />
        <img src={AmsSap} alt="Icons" className="keen-slider__slide slide" />
        <img src={Discovery} alt="Icons" className="keen-slider__slide slide" />
        <img src={Convercao} alt="Icons" className="keen-slider__slide slide" />
        <img
          src={Implementacao}
          alt="Icons"
          className="keen-slider__slide slide"
        />
        <img
          src={InfraestruturaSap}
          alt="Icons"
          className="keen-slider__slide slide"
        />
        <img
          src={Integracao}
          alt="Icons"
          className="keen-slider__slide slide"
        />
        <img
          src={MelhoriasSap}
          alt="Icons"
          className="keen-slider__slide slide"
        />
      </div>
    </Styles.Main>
  );
};
