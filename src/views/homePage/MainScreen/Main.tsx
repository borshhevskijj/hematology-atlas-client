import { Input } from "../../search/Input";
import cl from "./main.module.css";

import img1 from "../../../assets/mainScreen/leukotest1.webp";
import img2 from "../../../assets/mainScreen/leukotest2.webp";
const Main = () => {
  return (
    <section className={`${cl.main} container`}>
      <h1>
        <span>гематологический</span>
        <span>атлас</span>
      </h1>
      <div className={cl.content}>
        <div className={cl.contentWrapper}>
          <p>
            Наш атлас поможет вам лучше понять клетки крови и их роль в организме, а также основы гемопоэза.
            Предоставляем полезную информацию и визуальные материалы для обучения, исследований и практической работы
            в гематологии.
          </p>
          <p>
            Гемопоэз - процесс образования крови в костном мозге. Мы описываем его стадии и развитие клеток крови, таких
            как эритроциты, лейкоциты и тромбоциты. Предоставляем информацию о роли клеток и факторов роста, влияющих на
            гемопоэз.
          </p>
        </div>
        <div className={`dropShadowContainer ${cl.bigImageWrapper}`}>
          <img src={img1} alt="image" />
        </div>
        <div className={`dropShadowContainer ${cl.smallImageWrapper}`}>
          <img loading="lazy" src={img2} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Main;
