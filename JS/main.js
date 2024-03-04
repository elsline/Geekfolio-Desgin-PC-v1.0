window.addEventListener("load", () => {
  let loader = document.querySelector(".loading-screen");
  loader.classList.add("hide");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader); // remove loader element, not the string "loader"
  });
});

let homeMenu = document.querySelector(".home-menu");

document.querySelector(".nav-links .home").addEventListener("mouseover", () => {
  homeMenu.classList.add("active");
});
document
  .querySelector(".nav-links .home")
  .addEventListener("mouseleave", () => {
    homeMenu.classList.remove("active");
  });
////////////////
let pagesMenu = document.querySelector(".pages-menu");
document
  .querySelector(".nav-links .pages")
  .addEventListener("mouseleave", () => {
    pagesMenu.classList.remove("active");
  });

document
  .querySelector(".nav-links .pages")
  .addEventListener("mouseover", () => {
    pagesMenu.classList.add("active");
  });

let portfolioMenu = document.querySelector(".portfolio-menu");
document
  .querySelector(".nav-links .portfolio")
  .addEventListener("mouseleave", () => {
    portfolioMenu.classList.remove("active");
  });

document
  .querySelector(".nav-links .portfolio")
  .addEventListener("mouseover", () => {
    portfolioMenu.classList.add("active");
  });

let blogsMenu = document.querySelector(".blogs-menu");

document
  .querySelector(".nav-links .blogs")
  .addEventListener("mouseleave", () => {
    blogsMenu.classList.remove("active");
  });

document
  .querySelector(".nav-links .blogs")
  .addEventListener("mouseover", () => {
    blogsMenu.classList.add("active");
  });

let shopMenu = document.querySelector(".shop-menu");

document
  .querySelector(".nav-links .shop")
  .addEventListener("mouseleave", () => {
    shopMenu.classList.remove("active");
  });

document.querySelector(".nav-links .shop").addEventListener("mouseover", () => {
  shopMenu.classList.add("active");
});

const circleText = document.querySelector(".hero .text p");
circleText.innerHTML = circleText.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 12}deg)" >${char}</span>`
  )
  .join("");

const circle = document.querySelector(".hero .circle");
circle.addEventListener("mousemove", (e) => {
  const bounds = circle.getBoundingClientRect();
  const moveX = e.clientX - bounds.left - bounds.width / 2;
  const moveY = e.clientY - bounds.top - bounds.height / 2;
  circle.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
});

circle.addEventListener("mouseout", (e) => {
  circle.style.transform = "";
});

let tln = gsap.timeline({
  defaults: {
    duration: 0.5,
    opacity: 0,
    ease: "linear",
  },
});
tln
  .from(".row-2 img", {
    y: 300,

    delay: 0.5,
  })
  .from(".row-1", {
    y: 50,
  })
  .set(".h1 span", {
    opacity: 1,
    color: "transparent",
  })
  .from("header", {
    y: 20,
  })
  .from(".benefits.imgs-holder", {
    y: 100,
  });
////////////

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".benefits .div1 span",
      start: "-200px 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".benefits .div1 span", {
    opacity: 0,
    y: 100,
    scale: 0.7,
  })
  .from(".benefits .div1 h2", {
    opacity: 0,
    y: 100,
    scale: 0.7,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".benefits .div1 .img1",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".benefits .div1 .img1", {
    width: 0,
  })
  .from(".benefits .div1 .img1 img", {
    scale: 1.2,
    filter: "blur(8px)",
  })
  .from(
    ".benefits .imgs-holder .img2",
    {
      width: 0,
    },
    "=0.1"
  )
  .from(".benefits .imgs-holder .img2 img", {
    scale: 1.2,
    filter: "blur(8px)",
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".benefits .div2 p",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .fromTo(
    ".benefits .div2 p",
    {
      opacity: 0,
      padding: 0,
      height: 35,
    },
    {
      opacity: 1,
      padding: 0,
      height: 65,
    }
  )
  .to(".benefits .div2 > p", {
    opacity: 1,
    paddingBottom: 40,
    height: 130,
  })
  .from(".benefits .div2 a", {
    opacity: 0,
    y: 100,
    scale: 0.7,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".benefits .div2 h2",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".benefits .div2 h2", {
    opacity: 0,
    y: 100,
    scale: 0.7,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".benefits .div2 .be div",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".benefits .div2 .be div", {
    opacity: 0,
    y: 100,
    stagger: { amount: 1 },
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".services .div1 span",
      start: "-200px 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".services .div1 span", {
    opacity: 0,
    y: 100,
    scale: 0.7,
  })
  .from(".services .div1 h2", {
    opacity: 0,
    y: 100,
    scale: 0.7,
  })
  .from(
    ".services .div1 p",
    {
      opacity: 0,
    },
    0
  );
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".services .row .box",
      start: "-100px 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
      trigger: ".services .row .box",
      start: "-100px 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".services .row .box", {
    opacity: 0,
    stagger: { amount: 1 },
  });

// gsap Scroll

const images = gsap.utils.toArray(".wrapper .img-box");

let scrollTween = gsap.to(images, {
  xPercent: -105 * (images.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    markers: false,
    start: "top 20%",
    pin: true, //
    scrub: 1,
    end: "+=5000",
  },
});

let links = document.querySelectorAll(".designs ul li");
let cards = document.querySelectorAll(".designs .card");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    cards.forEach((card) => {
      if (index == card.dataset.card) {
        cards.forEach((card) => {
          card.style.opacity = "0";
        });
        // card.style.opacity = "1";
        gsap.set(card, {
          opacity: 1,
        });
      }
    });
  });
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".designs .div1 span",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".designs .div1 > span", {
    opacity: 0,
    scale: 0.7,
  })
  .from(".designs .div1 > p", {
    opacity: 0,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".designs .div1 ul",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".designs .div2 .card .box", {
    duration: 0.5,
    opacity: 0,
    x: 50,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".testimonials .container > span",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".testimonials  h2", {
    y: 100,
    scale: 0.7,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".testimonials .col-lg-5",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".testimonials .col-lg-5", {
    x: -100,
  })
  .from(
    ".testimonials .col-lg-7",
    {
      opacity: 0,
    },
    0
  );
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".numbers",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".numbers .col-lg-3", {
    opacity: 0,
    stagger: { amount: 1 },
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".news .col-lg-6",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
      markers: false,
    },
  })
  .from(".news  span", {
    opacity: 0,
    y: 100,
    scale: 0.7,
  })
  .from(
    ".news  h2",
    {
      opacity: 0,
      y: 100,
      scale: 0.7,
    },
    0
  )
  .from(
    ".news  .title a",
    {
      opacity: 0,
      y: 100,
      scale: 0.7,
    },
    0
  )
  .from(".news .col-lg-6 .card", {
    opacity: 0,
    y: 100,
  });

gsap.timeline({
  scrollTrigger: {
    trigger: "",
    start: "top 10%",
    end: "bottom 10%",
    scrub: true,
    markers: false,
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".wrapperr ",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
      markers: false,
    },
  })
  .from(".wrapperr .img-box", {
    opacity: 0,
    y: 200,
    stagger: { amount: 1 },
  });
