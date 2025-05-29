
// FOR SINGLE PAGE SCROLLING
const sections = document.querySelectorAll("section[id]");


// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.scrollY;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop =
      current.getBoundingClientRect().top + window.scrollY - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// RENDER PORTFOLIO CARDS WITH TEMPLATE
const portfolioData = {
  "projects": [
    {
      "name": "TicTacToe.Ai",
      "description": "A Python AI Agent that plays Tic Tac Toe with the Minimax algorithm, frontend in Typescript/React",
      "topics": ["AI", "Python", "Typescript", "React"],
      "site_url": "https://ai-tictactoe.fly.dev/",
      "code_url": "https://github.com/Michael-Fares/ai-tictactoe",
      "image_url":"ttt-ai.webp",
      "image_alt":"Tic Tac Toe board"
    },
    {
      "name": "Islamic Tesselation App",
      "description": "App to generate, design and color an Islamic mosaic tile and tessellation downloadable as an svg",
      "topics": ["d3.js", "react.js", "svg"],
      "site_url": "https://tilemaker.netlify.app/",
      "code_url": "https://github.com/Michael-Fares/tiles",
      "image_url":"tiles.webp",
      "image_alt": "Coloring an islamic geometric tesslation"
    },
    {
      "name": "Pixel Perfect Landing Page",
      "description": "Pixel perfect implementation of a product landing page design for Zospace Apps at Zollege",
      "topics": ["Bootstrap 5", "CSS", "HTML", "Design implementation"],
      "site_url": "https://michael-fares.github.io/landingpage/html/landing.html",
      "code_url": "https://github.com/theMVPshop/landingpage",
      "image_url":"landingpage.webp",
      "image_alt":"Zospace Apps Landing Page"
    },
    {
      "name": "Interactive Piano Question",
      "description": "Open source contribution of a question demo built as part of my work at Learnosity",
      "topics": ["javascript", "CSS", "PHP"],
      "site_url": "https://demos.learnosity.com/usecases/customquestions/custom_piano.php",
      "code_url": "https://github.com/Learnosity/custom-questions-skeleton/tree/master/demos/piano",
      "image_url":"piano.webp",
      "image_alt":"Piano custom question"
    },
    {
      "name": "Interactive Clock Question",
      "description": "Open source contribution of a question demo built as part of my work at Learnosity",
      "topics": ["d3.js", "SVG", "javascript", "PHP"],
      "site_url": "https://demos.learnosity.com/usecases/customquestions/custom_clock.php",
      "code_url": "https://github.com/Learnosity/custom-questions-skeleton/tree/master/demos/clock",
      "image_url":"clock.webp",
      "image_alt":"Clock custom question"
    },
    {
      "name": "College Scorecard App",
        "description": "Data Visualization for the Latest Available U.S. Department of Education College Scorecard Data",
        "topics": ["data-visualization", "Node.js", "proxy-server", "react.js", "recharts.js"],
        "site_url": "https://visualedu.netlify.app/",
        "code_url": "https://github.com/Michael-Fares/educationDataApp",
        "image_url":"college-scorecard.webp",
        "image_alt":"Data visualization for Department of Education College Scorecard Data"
    },
    {
      "name": "Ecommerce App",
      "description": "Mini full stack e-commerce site with stripe credit card payment integration",
      "topics": ["ecommerce-website", "Node.js", "express.js", "react.js", "Stripe API"],
      "site_url": "https://elated-thompson-d75004.netlify.app/",
      "code_url": "https://github.com/Michael-Fares/e-commerce-app",
      "image_url":"e-commerce-app.webp",
      "image_alt":"e-commerce site"
    }
  ]
}


const PROJECTS_UL = 'ul.projects-list';
const TOPICS_UL = 'ul.project-topics-list'

portfolioData.projects.forEach((project, i) => {
  const { name, description, topics, code_url, site_url, image_url, image_alt } = project
  // OUTER LIST (project cards)
  const projectTemplate = 
  /*html*/`<li class="project-card project-${i}">
          <h4 class="project-name">${name}</h4>
          <div class="project-image-container">
           <img src="./images/${image_url}" alt="${image_alt}" loading="lazy" class="project-image">
          </div>
          <div class="card-content">
            <div class="project-card-buttons">
              <a href=${code_url} target="_blank">CODE</a>
              <a href=${site_url} target="_blank">VISIT</a>
            </div>
            <p class="project-description">${description}</p>
            <ul class="project-topics-list"></ul>
        </div>
    </li>`
  
  document.querySelector(`${PROJECTS_UL}`).innerHTML += projectTemplate;
  // inner list for list of topics on each card  
  topics.forEach(topic => {
    document.querySelector(`.project-${i} ${TOPICS_UL}`).innerHTML += `<li class="project-topic-chip">${topic}</li>`
  })
  
})

