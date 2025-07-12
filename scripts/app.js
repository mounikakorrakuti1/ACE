// Event Data with Matter & Images
const eventData = {
  newbies23: {
    title: "Newbies 2023",
    desc: "An orientation event for the 2023 CSE batch. It featured fun activities, team building, and an introduction to the ACE community. Senior students shared tips, resources, and how to thrive in SRKR life.",
    images: ["new23.png"]
  },
  newbies24: {
    title: "Newbies 2024",
    desc: "A fresh welcome to the 2024 batch filled with ice-breaking games, fun showcases, cultural events, and peer mentoring sessions. The event was designed to make newcomers feel at home.",
    images: ["n2.png"]
  },
  figma: {
    title: "Figma Workshop",
    desc: "A hands-on session on UI/UX design where students learned Figma tool from scratch. The workshop helped participants build wireframes and interactive mockups for real applications.",
    images: ["fig.png", "fig2.png"]
  },
  ml: {
    title: "Machine Learning Talk",
    desc: "An expert-led seminar that introduced students to core ML concepts, data patterns, and real-time applications like image classification and recommendation systems.",
    images: ["mlex.png"]
  },
  ai: {
    title: "AI Innovation",
    desc: "A spotlight event focused on AI's role in modern tech. Included talks on generative AI, ethical AI, and innovation stories from startups, curated by ACE alumni.",
    images: ["ai.png"]
  },
  prajwalan: {
    title: "Prajwalan",
    desc: "ACE's signature technical and cultural hackathon. Students from various colleges showcased their talent in innovation, tech building, and cultural performance segments.",
    images: ["p24.png"]
  },
  spurthi24: {
    title: "Spurthi 2K24",
    desc: "A mega intercollegiate tech fest organized by ACE with coding challenges, hardware demos, UI design sprints, and quiz marathons. Participation crossed 800 students.",
    images: ["s241.png", "s242.png", "s243.png", "s244.png", "s245.png", "s246.png", "s247.png", "s248.png"]
  },
  spurthi25: {
    title: "Spurthi 2K25",
    desc: "The 2025 edition focused on futuristic tech like IoT, Blockchain and AI in health. Included panel talks, idea expo, and a developer showcase for project builders.",
    images: ["s21.png", "s22.png", "s23.png", "s24.png", "s25.png", "s26.png", "s27.png", "s28.png"]
  },
  ace: {
    title: "ACE Event",
    desc: "A professional event curated to build leadership and career-focused skills. Sessions included GitHub for devs, resume reviews, and mock interviews by alumni.",
    images: ["ace.jpg"]
  },
  beats: {
    title: "Beats and Code",
    desc: "An ACE-exclusive session that combined creative coding with music logic. It helped students understand patterns, loops, and structure with rhythm-based fun.",
    images: ["bnc.png"]
  },
  skillup: {
    title: "Skill Up",
    desc: "A recurring series hosted by ACE to improve communication, CV building, public speaking, and teamwork. Ideal for students prepping for placements and leadership roles.",
    images: ["ski.png", "ski2.png"]
  }
};

// Open Modal with Content
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
          </div>
        `).join("")}
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

// Close Modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
