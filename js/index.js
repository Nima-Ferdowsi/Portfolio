function dateAgo(startDate, endDate) {
  var startDate = new Date(startDate);
  var diffDate = new Date(new Date(endDate) - startDate);
  return (
    diffDate.toISOString().slice(0, 4) - 1970 + "Y " + diffDate.getMonth() + "M"
  );
}
function Skills(name, value) {
  this.name = name;
  this.value = value;
}
function Experience(name, pos, startDate, endDate, body) {
  this.name = name;
  this.pos = pos;
  this.date = dateAgo(startDate, endDate);
  this.body = body;
}
function Sample(title, link, body) {
  this.title = title;
  this.link = link;
  this.body = body;
}
//skills
const Html = new Skills("Html", "100");
const Css = new Skills("CSS", "95");
const JavaScript = new Skills("JavaScript", "90");
const BootStrap = new Skills("BootStrap", "90");
const Sass = new Skills("Sass", "82");
const Material = new Skills("Material UI", "65");
const React = new Skills("React", "90");
const Redux = new Skills("Redux", "85");
const TypeScript = new Skills("TypeScript", "65");
const NodeJs = new Skills("NodeJs", "82");
const Express = new Skills("Express", "90");
const Git = new Skills("Git", "80");
const mySkills = [
  Html,
  Css,
  JavaScript,
  BootStrap,
  Sass,
  Material,
  React,
  Redux,
  TypeScript,
  NodeJs,
  Express,
  Git,
];

//experience
const Pyaramid = new Experience(
  "Pyramid.Inv",
  "Fullstack developer | Ireland ",
  "2019-01-01",
   new Date(),
  ` Pyramid.Inv was my first company that I was.
This company was not public 
company it was organization between companies for buying stocks.....`
);
const CloudTree = new Experience(
  "CloudTree/Cloud4Agri",
  "Frontend developer | Ireland ",
  "2020-12-10",
  "2021-05-10",
  ` CloudTree was my second company that I was.
   in this company I work on both website(regular) and mobile apps(games). 
  `
);
const Freelancer = new Experience(
  "Freelancer",
  "Freelancer | international ",
  "2020-06-01",
  new Date(),
  ""
);
const NumberLand = new Experience(
  "Numberland",
  "Frontend Developer | Iran ",
  "2020-10-01",
  new Date(),
  "In this company I was Responsible for frontend this company it was a company that selling virtual numbers to clients "
);
const myExperience = [Pyaramid, CloudTree];

//sample
const Movie = new Sample(
  "Movie",
  "http://rise-movie.42web.io/",
  `This site is an sample of project of an Movie Website that has different sections, such as
searching movie base on search and genres and .... and =get movie detailes technology used
are: HTML , CSS , JAVASCRIPT , REACT , BOOTSTRAP`
);
const WhatsApp = new Sample(
  "whatsapp",
  "http://whatsappclone.42web.io/",
  `This site is fullstack (mern stack) realtime chat app frontend technology : HTML , CSS ,
JAVASCRIPT , REACT ,Redux, Material-ui , bootstrap backend technology :nodejs , express js ,
mongodb, monggose`
);
const Ecommerce = new Sample(
  "Ecommerce",
  "https://rise-ecommerce.netlify.app/",
  `This site is fullstack (mern stack) ecommerce project 
  frontend: react and redux, bootstrap
  backend: node js,express ,mongodb,`
);

const mySamples = [Movie, WhatsApp, Ecommerce];

const addProgressBar = () => {
  for (let i = 0; i < mySkills.length; i++) {
    const element = mySkills[i];
    const progressElement = `<div class="col-lg-6 col-md-6 col-sm-12 colsm-12 progress_container">
        <h5>${element.name}</h5>
    
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${element.value}%;" aria-valuenow="${element.value}" aria-valuemin="0" aria-valuemax="100">${element.value}%</div>
          </div>
      </div>`;
    document.querySelector("#skills_list").innerHTML += progressElement;
  }
};
const addExperience = () => {
  for (let i = 0; i < myExperience.length; i++) {
    const element = myExperience[i];
    const experienceElement = `   
     <li>
    <div class="resume_item">
        <div class="resume_head">
            <div class="el_icon">
            </div>
            <h5 class="resume_item_title">
                ${element.name}
            </h5>
            <h5 class="resume_item_pos">
            ${element.pos}|${element.date}
           </h5>
  

        </div>
        <div class="resume_body">
        ${element.body}
        </div>
    </div>
   </li>`;
    document.querySelector("#experience_list").innerHTML += experienceElement;
  }
};
const addSamples = () => {
  for (let i = 0; i < mySamples.length; i++) {
    const element = mySamples[i];
    console.log(element);
    const sampleElement = `   
     <li>
    <div class="resume_item">
        <div class="resume_head">
            <div class="el_icon">
            </div>
            <h5 class="resume_item_title">
                ${element.title}
            </h5>
            <a target="_blank"  href=${element.link}  class="resume_item_pos">
            Link
           </a>
  

        </div>
        <div class="resume_body">
        ${element.body}
        </div>
    </div>
   </li>`;
    document.querySelector("#sampals_list").innerHTML += sampleElement;
  }
};
document.addEventListener("DOMContentLoaded", () => {
  addProgressBar();
  addExperience();
/*   addSamples();
 */});
