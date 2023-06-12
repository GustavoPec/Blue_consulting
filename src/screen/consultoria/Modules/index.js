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
  const animation = { duration: 7000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 48,
    },
    loop: true,
    renderMode: "performance",
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <Styles.Main ref={sliderRef} className="keen-slider">
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
      <img src={Integracao} alt="Icons" className="keen-slider__slide slide" />
      <img
        src={MelhoriasSap}
        alt="Icons"
        className="keen-slider__slide slide"
      />
    </Styles.Main>
  );
};
