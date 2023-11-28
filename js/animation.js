//FUNCTION THAT WILL DISPLAY RUN THE ANIMATION TEXT IN HEROBANNER
//CODE FROM :https://codepen.io/abirana/pen/vYEqqEy?fbclid=IwAR2PKb8t9tYR815VjFKcqRGAseSZ3z5MMiIMtOK24ZvPwR61DvqT5MX2PSQ:
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
//code from:https://codepen.io/jkulton/pen/zdXMXL
//https://www.w3schools.com/JSREF/prop_textarea_value.asp
// Get textarea and clears it (in case there is a previous loaded value)
let textarea = document.querySelector("textarea");
//The value property sets or returns the contents of a text area in this case it sets the textarea content to empty.
textarea.value = "";

var text = 0;
let message =
  "1.<section>\n2.<h2>Biography</h2>\n3.<h3>Why UX design and Front-end development?</h3>\n4.<p>I decided to study UX design and Front-end development since I have \n5.great passion for creativity, structure, design and logic</p>\n6.<p>UX design and Front-end development also allows me to be able to bring \n7.things to life visually which is appealing to me</p>\n8.<p>I love to create user-friendly design that captures \n9.users attention and suppliment this with semantic code.</p>\n10.<p>I truly enjoy working on different projects, \n11.solve problems, expand my knownledge and my skills.</p>\n12.<p>I am also a positive and curious person and like the fact \n13.that there is always something new to learn as a UX designer and Front-end \n14.developer.</p>\n15.<p>I am looking forward to continue this journey and create\n16.the best solutions for customers.</p>\n17.</section>";

/*let message2 = [
  '1.<section>',
  '2.<h2>Biography</h2>'
].join('\n')*/

const blink = (keepCursor) => {
  if (keepCursor) {
    textarea.value += "|";
  } else {
    //https://www.w3schools.com/jsref/jsref_slice_array.asp
    //The slice() method returns selected elements in an array, as a new array.
    //The slice() method selects from a given start, up to a (not inclusive) given end.
    //The slice() method does not change the original array.
    //.slice(start, end) syntax
    textarea.value = textarea.value.slice(0, -1);
  }
  //https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(() => blink(!keepCursor), 500);
};

let animateInput = (input) => {
  if (input.length === 0) {
    blink(false);
    return;
  }
  //https://www.w3schools.com/js/js_random.asp
  let timeout = Math.random() * 20 + 50;
  //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
  setTimeout(() => {
    textarea.value = textarea.value.slice(0, -1) + input.slice(0, 1) + "|";
    animateInput(input.slice(1));
  }, timeout);
};

let aboutSectionMouseEntered = false;
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
//https://www.w3schools.com/jsref/event_onmouseenter.asp
document.querySelector(".about").addEventListener("mouseenter", () => {
  if (aboutSectionMouseEntered) return;

  aboutSectionMouseEntered = true;
  // textarea.focus();
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
  //https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  //https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
  const position = section.getBoundingClientRect().y;
  return position > 0 + offset && position < window.innerHeight - offset;
};
//This ensures that the about me part is shown when the user has scrolled down to this part
//https://www.w3schools.com/jsref/event_onscroll.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
//https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom?fbclid=IwAR2-2NkJkv-9i8x_oJjdPBeKYu7Xeu9QuNO7PXNXmqPBB82nTNuBga-Hbzk
//https://nightwatchjs.org/v09/api/isVisible.html?fbclid=IwAR0pwFrY2zBxEi7k-DxQgME7h5vBlIA9zGmo4z5aVp-94pdS0Bulu4FXnDw
window.addEventListener("scroll", (event) => {
  sectionsToBeAnimated.forEach(({ section, hasBeenAnimated }, index, arr) => {
    if (!hasBeenAnimated && isVisible(section)) {
      section.classList.add("animate");
      arr[index].hasBeenAnimated = true;
    }
  });
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
