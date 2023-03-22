import React from "react";
import Course from "./component/Course";

import "./styles.css";

import angular from "../../images/angular.jpg";
import bootstrap5 from "../../images/bootstrap5.png";
import ccsharp from "../../images/ccsharp.png";
import kompleweb from "../../images/kompleweb.jpg";

const ReactStart = () => {
  const languages = [
    {
      id: 1,
      title: "Angular",
      image: angular,
      description:
        "AngularJS, Rich İnternet Uygulaması (RIA) oluşturmak için güçlü bir JavaScript tabanlı geliştirme çerçevesidir (framework). AngularJS, temiz bir MVC (Model View Controller) yöntemiyle istemci tarafı uygulaması (JavaScript kullanarak) yazmak için geliştiriciler sağlar.",
    },
    {
      id: 2,
      title: "Boostrap 5",
      image: bootstrap5,
      description:
        " React, kullanıcı arayüzleri oluşturmak için açık, verimli ve esnek bir JavaScript kütüphanesidir. Component (bileşen) denilen küçük ve izole parçalar sayesinde karmaşık arayüz birimlerini oluşturmanıza olanak tanır.",
    },
    {
      id: 3,
      title: "C#",
      image: ccsharp,
      description:
        "Vue (Vue.js / Vue JS), kullanıcı arayüzü (UI) ve tek sayfalı uygulamalar oluşturmayı sağlayan, açık kaynaklı popüler bir Javascript kütüphanesi. Vue.js ile modern, küçük, orta ve büyük ölçekli mobil ve masaüstü uygulamalar oluşturmak mümkün.",
    },
    {
      id: 4,
      title: "Frontend",
      image: kompleweb,
      description:
        "Bootstrap, kullanılabilir kod parçalarından oluşan açık kaynaklı ve ücretsiz bir web uygulaması geliştirme araç takımıdır. Sahip olduğu CSS ve JavaScript taslakları, web sitelerinin ve mobil uygulamaların kullanıcılara görünen bileşenleri için kullanılır.",
    },
  ];
  return (
    <div className="reactStartMain">
      <div>
        <section className="hero is-success">
          <div className="hero-body">
            <p className="title">KURSLAR</p>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">
              <Course
                title={languages[0].title}
                image={languages[0].image}
                description={languages[0].description}
              />
            </div>
            <div className="column">
              <Course
                title={languages[1].title}
                image={languages[1].image}
                description={languages[1].description}
              />
            </div>
            <div className="column">
              <Course
                title={languages[2].title}
                image={languages[2].image}
                description={languages[2].description}
              />
            </div>
            <div className="column">
              <Course
                title={languages[3].title}
                image={languages[3].image}
                description={languages[3].description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactStart;
