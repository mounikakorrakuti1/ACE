const eventData = {
  spurthi24: {
    title: "Spurthi 2K24",
    desc: "A grand technical fest conducted by ACE, filled with innovative competitions, coding battles, and tech-based activities.",
    images: ["s241.png", "s242.png", "s243.png", "s244.png", "s245.png", "s246.png", "s247.png", "s248.png"]
  },
  spurthi25: {
    title: "Spurthi 2K25",
    desc: "Upcoming edition of Spurthi, aiming to be bigger and more impactful, involving both tech and non-tech fun events.",
    images: ["s21.png", "s22.png", "s23.png", "s24.png", "s25.png", "s26.png", "s27.png", "s28.png"]
  },
  prajwalan: {
    title: "Prajwalan",
    desc: "Prajwalan is ACE's flagship cultural event filled with dance, drama, music and creative performances by CSE students.",
    images: ["p24.png"]
  },
  newbies23: {
    title: "Newbies 2023",
    desc: "Orientation for freshers of 2023 batch to welcome them into the ACE family with fun, games, and mentoring.",
    images: ["new23.png"]
  },
  newbies24: {
    title: "Newbies 2024",
    desc: "Welcoming the 2024 freshers with a blend of cultural events, tech showcases and team-building activities.",
    images: ["n2.png"]
  },
  figma: {
    title: "Figma Workshop",
    desc: "A UI/UX hands-on workshop on design thinking and using Figma to prototype real-world application interfaces.",
    images: ["fig.png", "fig2.png"]
  },
  beats: {
    title: "Beats and Code",
    desc: "An event that merges music and coding, exploring rhythm and logic through interactive activities.",
    images: ["bnc.png"]
  },
  skillup: {
    title: "Skill Up",
    desc: "Skill enhancement series by ACE covering GitHub, public speaking, resume building, and teamwork skills.",
    images: ["ski.png", "ski2.png"]
  },
  ml: {
    title: "Machine Learning Talk",
    desc: "An expert session on Machine Learning concepts and real-world applications, held in the ACE hall.",
    images: ["mlex.png"]
  },
  ai: {
    title: "AI & Innovation",
    desc: "A special talk by alumni and professionals on how AI is transforming the world and how students can be part of it.",
    images: ["ai.png"]
  }
};

function openEvent(eventKey) {
  const modal = document.getElementById("modal");
  const modalDetails = document.getElementById("modal-details");

  if (!eventData[eventKey]) return;

  const { title, desc, images } = eventData[eventKey];

  let sliderHTML = `
    <div class="swiper">
      <div class="swiper-wrapper">
        ${images.map(img => `
          <div class="swiper-slide">
            <img src="assets/images/${img}" alt="${title}" />
          </div>`).join("")}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  `;

  modalDetails.innerHTML = `
    <h2>${title}</h2>
    <p>${desc}</p>
    ${sliderHTML}
  `;

  modal.style.display = "flex";

  new Swiper(".swiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
