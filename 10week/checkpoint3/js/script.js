/* Creating all of our variables for our functions to effect our punch count */
let punches = 0;
let bGloves = 0;
let partner = 0;
let coach = 0;
let rocky = 0;

let bGlovesCost = 50;
let partnerCost = 15;
let coachCost = 100;
let rockyCost = 1100;

let click = 1;
let partners = 0;
let coaches = 0;
let rockys = 0;

document.querySelector(".punchingBag").addEventListener("click", function() {
  punches = punches + click;
  document.getElementById("punches").innerHTML = punches + " punches";
});

/* Boxing glove logic, which increases the value of each punch, multiplying each click by 5 */
document.querySelector(".powerClick").addEventListener("click", function() {
  if (punches - bGlovesCost >= 0) {
    punches = punches - 50;
    click = click * 5;
    bGloves = bGloves + 1;
    bGlovesCost = bGlovesCost * 2;
    partners = partners * 2;
    document.getElementById("pp").innerHTML = "You have " + bGloves + " pair of boxing gloves - Cost: " + bGlovesCost + " punches";
    document.getElementById("messages").innerHTML = "You bought " + bGloves + " pair of boxing gloves";
  } else {
    punches = punches;
    bGloves = bGloves;
    bGlovesCost = bGlovesCost;
  }
});

/* Training partner logic, which runs up our punch count wthout even clicking it */
let clickerRun = function() {
  punches = punches + partners;
  punches = Math.ceil(punches * 10) / 10;
  document.getElementById("punches").innerHTML = punches + " punches";
};

document.querySelector(".partner").addEventListener("click", function() {
  if (punches - partnerCost >= 0) {
    console.log("partner is equal to " + partnerCost);
    punches = punches - partnerCost;
    partnerCost = Math.round(partnerCost * 2);
    partners = partners + 1;
    setInterval(clickerRun, 1000);
    partner = partner + 1;
    document.getElementById("pc").innerHTML = "You have " + partner + " training partners - Cost: " + partnerCost + " punches";
    document.getElementById("messages").innerHTML = "You recruited a new training partner.";
  }
});


/* Coach logic, which also runs up our punch count wthout even clicking it */
let coachRun = function() {
    punches = punches + coaches;
    document.getElementById("punches").innerHTML = punches + " punches"
  }

document.querySelector(".coach").addEventListener("click", function() {
  if (punches - coachCost >= 0) {
    punches = punches - coachCost;
    coachCost = Math.round(coachCost * 1.5);
    coaches = coaches + 1;
    setInterval(coachRun, 1000);
    coach = coach + 1;
    document.getElementById("pg").innerHTML = "You have " + coach + " Coaches - Cost: " + coachCost + " punches";
    document.getElementById("messages").innerHTML = "You hired another Coach.";
  }
});


/* Coach Rocky, which also runs up our punch count wthout even clicking it by an even higher rate */
let rockyRun = function() {
    punches = punches + rockys;
    document.getElementById("punches").innerHTML = punches + " punches"
  }

document.querySelector(".rocky").addEventListener("click", function() {
  if (punches - rockyCost >= 0) {
    punches = punches - rockyCost;
    rockyCost = Math.round(rockyCost * 1.5);
    rockys = rockys + 3;
    setInterval(rockyRun, 1000);
    rocky = rocky + 1;
    document.getElementById("pf").innerHTML = "You have recruited Rocky Balboa " + rocky + " times - Cost: " + rockyCost + " punches";
    document.getElementById("messages").innerHTML = "You recruited Rocky Balboa " + rocky + "  times.";
  }
});
