import { useRef, useEffect } from "react";
import cl from "./aboutProject.module.css";
import img from "../../../assets/aboutProject/aboutprojectimg.webp";
import img2 from "../../../assets/aboutProject/aboutprojectimg2.webp";

const AboutProject = () => {
  return (
    <section id="aboutProject" className={`${cl.aboutProject} container`}>
      <h1>О проекте</h1>
      <div className={cl.content}>
        <div className={`${cl.contentWrapper} ${cl.contentWrapperLeft}`}>
          <p>
            Этот проект - онлайн-ресурс, посвященный изучению клеток крови, их морфологии, функциям и патологическим
            изменениям. Мы предоставляем информацию о различных типах клеток крови и позволяем визуально их
            идентифицировать.
          </p>
          <div className="dropShadowContainer">
            <img loading="lazy" src={img} alt="decoration" />
          </div>
        </div>

        <div className={`${cl.imgWrapper} bRadius`}>
          <img loading="lazy" src={img2} alt="decoration" />
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
