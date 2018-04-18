$(document).ready(() => {
  const projects = {};

  projects.yumyum = {
    title: 'yumyum',
    link: 'https://young-harbor-98642.herokuapp.com/',
    github: 'https://github.com/LauraRobertson/Yum-Yum-Api',
    description: 'Search for recipes using Edamam API. A clean, minimal, and colorful design to get you excited for your next cooking project. </p> Built with Ruby on Rails, test-driven with Minitest and VCR.',
    stack: 'Rails, Edamam API, Minitest, HTTParty, VCR, Heroku',
    image1: './assets/images/yumyumgo.gif',
    image2: './assets/images/yumyum2.png',
    image3: './assets/images/yumyum3.png',
    image4: './assets/images/yumyum1.png',
  };

  projects.samesame = {
    title: 'Same Same',
    link: 'https://same-same.herokuapp.com/',
    github: 'https://github.com/LauraRobertson/first-of-all-its-a-burger-not-a-hamburger',
    description: 'An interactive and exploratory mood journal made with a team of five. Users are given a random assortment of images and a prompt that they can transform, arrange, and save to a gallery. </p>Agile development using a combination of pair and mob programming with Kanban workflow',
    stack: 'Ruby on Rails, Javascript, Draggable.js, Minitest, Heroku',
    image1: './assets/images/samesamego.gif',
    image2: './assets/images/samesame1.png',
    image3: './assets/images/samesame2.png',
    image4: './assets/images/samesame3.png',
  };

  const urlParams = new URLSearchParams(window.location.search);
  let param = urlParams.get('name');

  if (param === null || !projects.hasOwnProperty(param)) { param = 'yumyum'; }
  const project = projects[param];

  $('#title').html(project.title);
  $('#link').attr('href', project.link);
  $('#github').attr('href', project.github);
  $('#description').html(project.description);
  $('#stack').html(project.stack);
  $('#image1').attr('src', project.image1);
  $('#image2').attr('src', project.image2);
  $('#image3').attr('src', project.image3);
  $('#image4').attr('src', project.image4);
});
