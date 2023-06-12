import * as Styles from "./style";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.css";
import Logo from "../../../../assets/Logo.svg";

export const Costumers = () => {
  const [SliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 30,
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
      <div ref={SliderRef} className="keen-slider">
        <div className="keen-slider__slide slide">
          <img src={Logo} alt="Cliente" />
        </div>
        <div className="keen-slider__slide slide">
          <img src={Logo} alt="Cliente" />
        </div>
        <div className="keen-slider__slide slide">
          <img src={Logo} alt="Cliente" />
        </div>
        <div className="keen-slider__slide slide">
          <img src={Logo} alt="Cliente" />
        </div>
      </div>
    </Styles.Main>
  );
};
