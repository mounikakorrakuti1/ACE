AOS.init({ duration: 600, once: true });

const data = {
  spurthi24: {
    title:"Spurthi 2K24",
    desc:"A memorable tech fiesta featuring code jams, quizzes, robotics and more.",
    imgs:["assets/images/sp241.png","assets/images/sp242.png","assets/images/sp243.png"]
  },
  spurthi25: {
    title:"Spurthi 2K25",
    desc:"The next-gen Spurthi 2K25 – coming with more events, more innovation.",
    imgs:["assets/images/s21.png","assets/images/s22.png","assets/images/s23.png"]
  },
  prajwalan: {
    title:"Prajwalan Cultural Fest",
    desc:"Dance, music, art and culture – ACE’s festive spotlight.",
    imgs:["assets/images/p22.png","assets/images/p24.png"]
  },
  newbies23: {
    title:"Newbies 2023",
    desc:"Welcoming our 2023 batch with fun games & bonding.",
    imgs:["assets/images/new23.png"]
  },
  newbies24: {
    title:"Newbies 2024",
    desc:"Freshers 2024 unite! Orientation, laughter & memories.",
    imgs:["assets/images/n2.png"]
  },
  beatscodes: {
    title:"Beats & Codes",
    desc:"Code to the rhythm – musical coding hackathon.",
    imgs:["assets/images/bnc.png"]
  },
  skillup: {
    title:"Skill Up Sessions",
    desc:"Hands-on workshops to build your dev toolkit.",
    imgs:["assets/images/ski.png","assets/images/ski2.png"]
  },
  figma: {
    title:"Figma UI/UX Workshop",
    desc:"Learn real-world prototyping & UX design with Figma.",
    imgs:["assets/images/fig.png","assets/images/fig2.png"]
  },
  ml_expert: {
    title:"ML Expert Talk",
    desc:"Industry-led insights into Machine Learning innovations.",
    imgs:["assets/images/mlex.png"]
  },
  ai_session: {
    title:"AI Session",
    desc:"AI breakthroughs & their real-world applications.",
    imgs:["assets/images/ai.png"]
  }
};

function openEvent(key) {
  const mod = document.getElementById("modal");
  const container = document.getElementById("modal-details");
  if (!data[key]) return;

  const { title, desc, imgs } = data[key];
  container.innerHTML = `
    <h2>${title}</h2><p>${desc}</p>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        ${imgs.map(u=>`<div class="swiper-slide"><img src="${u}" alt="${title}"/></div>`).join('')}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  `;
  mod.style.display="flex";
  new Swiper(".mySwiper",{ loop:true,pagination:{el:'.swiper-pagination'}});
}

function closeModal() {
  document.getElementById("modal").style.display="none";
}
