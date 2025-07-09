const eventsData = {
  "brain-bytes": {
    title: "Brain Bytes",
    description: "A fast-paced tech quiz that challenges your logical thinking and technical knowledge.",
    images: [
      "https://via.placeholder.com/700x250",
      "https://via.placeholder.com/700x250"
    ]
  },
  "tech-tornado": {
    title: "Tech Tornado",
    description: "A technical showdown of code, creativity, and innovation.",
    images: [
      "https://via.placeholder.com/700x250",
      "https://via.placeholder.com/700x250"
    ]
  },
  "ideathon": {
    title: "Ideathon",
    description: "Pitch your best ideas in tech-driven innovation for real-world problems.",
    images: [
      "https://via.placeholder.com/700x250"
    ]
  },
  "prajwalan": {
    title: "Prajwalan",
    description: "Cultural spark of ACE — music, drama, dance, and celebration of creativity.",
    images: [
      "https://via.placeholder.com/700x250"
    ]
  },
  "newbies": {
    title: "Newbies",
    description: "Freshers welcome with fun games, team activities and a warm ACE family intro.",
    images: [
      "https://via.placeholder.com/700x250"
    ]
  },
  "figma": {
    title: "Figma Workshop",
    description: "Hands-on session on modern UI/UX design using Figma.",
    images: [
      "https://via.placeholder.com/700x250"
    ]
  },
  "beats-codes": {
    title: "Beats and Codes",
    description: "Fun-filled coding games combined with music and team spirit.",
    images: [
      "https://via.placeholder.com/700x250"
    ]
  },
  "skill-up": {
    title: "Skill Up",
    description: "Upskilling series: From development to deployment and everything in between.",
    images: [
      "https://via.placeholder.com/700x250"
    ]
  }
};

function openEvent(eventKey) {
  const modal = document.getElementById("event-modal");
  const container = document.getElementById("event-details");
  const event = eventsData[eventKey];

  if (!event) return;

  container.innerHTML = `
    <h2>${event.title}</h2>
    <p>${event.description}</p>
    <div class="swiper">
      <div class="swiper-wrapper">
        ${event.images.map(url => `<div class="swiper-slide"><img src="${url}" /></div>`).join('')}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  `;

  modal.style.display = "flex";

  new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

function closeModal() {
  document.getElementById("event-modal").style.display = "none";
}
