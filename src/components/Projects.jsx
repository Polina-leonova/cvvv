import React from 'react';
import landingImage from '../assets/photo1718997693.jpeg';
import galleryImage from '../assets/photo1718997693 (1).jpeg';
import kvantorImage from '../assets/photo1718998615 (1).jpeg';
import lunarSiteImage from '../assets/photo1718998615.jpeg';

const Projects = () => {
    return (
      <>
        <h1 className="project-title">Мои работы</h1>
        <div className="image-container">
          <div className="image-box">
            <a className="work-link" href="https://polina-leonova.github.io/land.github.io/">
              <img src={landingImage} alt="Лендинг" />
              <h3>Лендинг</h3>
            </a>
          </div>
          <div className="image-box">
            <a className="work-link" href="https://polina-leonova.github.io/galeria.github.io/">
              <img src={galleryImage} alt="Галерея" />
              <h3>Галерея</h3>
            </a>
          </div>
          <div className="image-box">
            <a className="work-link" href="https://polina-leonova.github.io/kventor.github.io/">
              <img src={kvantorImage} alt="Квентор" />
              <h3>Квентор</h3>
            </a>
          </div>
          <div className="image-box">
            <a className="work-link" href="https://polina-leonova.github.io/luna.github.io/">
              <img src={lunarSiteImage} alt="Лунный сайт" />
              <h3>Лунный сайт</h3>
            </a>
          </div>
        </div>
      </>
    );
};

export default Projects;