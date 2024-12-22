import React from 'react';

import profilePhoto from '../assets/photo.jpg'; // Импортируйте фотографию

const Main = () => {
  return (
    <div className="main-container">
      <div className="profile">
        <img src={profilePhoto} alt="Леонова Полина" className="profile-photo" />
        <div className="profile-info">
          <h2>Леонова Полина</h2>
          <h3>Frontend Developer</h3>
          <p className="education">Образование: БГУ Механико-Математический факультет, математика и компьютерные науки</p>
          <p className="english-level">Уровень английского: B2</p>
        </div>
      </div>
      <div className="skills-description">
        <h4>Описание умений</h4>
        <p>
        Я — фронтенд-разработчик с опытом работы в создании адаптивных и интерактивных веб-приложений. Я стремлюсь к постоянному обучению и улучшению своих навыков, активно изучая новые технологии и подходы в разработке. Мои проекты включают в себя создание одностраничных приложений, интернет-магазинов и корпоративных сайтов.
        Мой опыт работы в различных проектах позволяет мне быстро адаптироваться к новым задачам и требованиям.
        </p>
      </div>
    </div>
  );
};

export default Main;