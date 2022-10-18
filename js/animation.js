//FUNCTION THAT WILL DISPLAY RUN THE ANIMATION TEXT IN HEROBANNER

$(window).on("load", function (e) {
  var tlOnLoad = gsap.timeline({ delay: 1 });
  var onLoadTextCount = $(".anim-text-banner>.anim-text").length;
  console.log(onLoadTextCount);

  for (var i = 1; i <= onLoadTextCount; i++) {
    var onLoadTextWidth = ".anim-text-banner>.anim-text:nth-of-type(" + i + ")";
    tlOnLoad.to(
      onLoadTextWidth,
      {
        clip: "rect(0px, " + $(onLoadTextWidth).width() + "px, 300px, 0px)",
        ease: "expo.out",
        duration: 1,
      },
      "-=0.2"
    );
  }
  tlOnLoad.to(
    ".anim-text-parent>.v-bar",
    { width: 70, ease: "expo.out", duration: 1 },
    "-=0.2"
  );

  // ------------

  var tlMainAnim = gsap.timeline({ repeat: -1 });
  var animTextCount = $(".anim-text-parent>.anim-text").length;

  for (var i = 1; i <= animTextCount; i++) {
    var animTextWidth = ".anim-text-parent>.anim-text:nth-of-type(" + i + ")";
    tlMainAnim.to(animTextWidth, { opacity: 1, duration: 0.1 });
    tlMainAnim.to(animTextWidth, {
      clip: "rect(0px, " + $(animTextWidth).width() + "px, 300px, 0px)",
      ease: "expo.out",
      duration: 1,
    });
    tlMainAnim.to(
      animTextWidth,
      { clip: "rect(0px, 0px, 300px, 0px)", ease: "expo.out", duration: 1 },
      "+=0.75"
    );
    tlMainAnim.to(animTextWidth, { opacity: 0, duration: 0.1 });
  }

  tlOnLoad.add(tlMainAnim, "-=0.5");
});

//Typing animation

// Get textarea and clears it (in case there is a previous loaded value)
let textarea = document.querySelector("textarea");
textarea.value = "";

var text = 0;
let message =
  "1.<section>\n2.<h2>Biography</h2>\n3.<h3>Why Front-end development?</h3>\n4.<p>I decided to study Front-end development since I have \n5.great passion for creativity, structure, design and logic</p>\n6.<p>Front-end development also allows me to be able to bring \n7.things to life visually which is appealing to me</p>\n8.<p>I love to create user-friendly design that captures \n9.users attention and suppliment this with clean code.</p>\n10.<p>I truly enjoy working on different projects, \n11.solve problems, expand my knownledge and my skills.</p>\n12.<p>I am also a positive and curious person and like the fact \n13.that there is always something new to learn as a Front-end \n14.developer.</p>\n15.<p>I am looking forward to continue this journey and create\n16.the best solutions for customers.</p>\n17.</section>";

/*let message2 = [
  '1.<section>',
  '2.<h2>Biography</h2>'
].join('\n')*/

const blink = (keepCursor) => {
  if (keepCursor) {
    textarea.value += "|";
  } else {
    textarea.value = textarea.value.slice(0, -1);
  }

  setTimeout(() => blink(!keepCursor), 500);
};

let animateInput = (input) => {
  if (input.length === 0) {
    blink(false);
    return;
  }

  let timeout = Math.random() * 20 + 50;

  setTimeout(() => {
    textarea.value = textarea.value.slice(0, -1) + input.slice(0, 1) + "|";
    animateInput(input.slice(1));
  }, timeout);
};

let aboutSectionMouseEntered = false;
document.querySelector(".about").addEventListener("mouseenter", () => {
  if (aboutSectionMouseEntered) return;

  aboutSectionMouseEntered = true;
  textarea.focus();
  animateInput(message);
});

// Scroll animation
// window.scrollY
const sectionsToBeAnimated = [
  {
    section: document.querySelector(".about"),
    hasBeenAnimated: false,
  },
];

const isVisible = (section) => {
  const offset = 200;
  const position = section.getBoundingClientRect().y;
  return position > 0 + offset && position < window.innerHeight - offset;
};

window.addEventListener("scroll", (event) => {
  sectionsToBeAnimated.forEach(({ section, hasBeenAnimated }, index, arr) => {
    if (!hasBeenAnimated && isVisible(section)) {
      section.classList.add("animate");
      arr[index].hasBeenAnimated = true;
    }
  });
});
