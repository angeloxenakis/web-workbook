document.addEventListener("DOMContentLoaded", function(event) {
  alert("There are 4 list items to view and choose from on this page.");
})

let cartNumber = 0;
  // The line above makes the number of items in the shopping cart dynamic

  /* I feel like my code below is a little redundant, and I could have set up the "add"
  and "remove" functionality only one time rather than four times, repeated. The reason
  I set it up this way is because I was having a lot of trouble getting any buttons
  except the first set to work when using a class for each button. So basically I
  had to give them unique id's to get it to funciton correctly, which is why I had
  to recreate the logic for each id. */

  document.querySelector("#add1").addEventListener("click", function() {
    if (cartNumber >= 0) {
      cartNumber = cartNumber + 1;
      document.getElementById("messages").innerHTML = "You have " + cartNumber + " items in your shopping cart";
    } else {
      cartNumber = cartNumber;
    }
  });

  document.querySelector("#remove1").addEventListener("click", function() {
    if (cartNumber > 0) {
      cartNumber = cartNumber - 1;
      document.getElementById("messages").innerHTML = "You have " + cartNumber + " items in your shopping cart";
    }
    else if (cartNumber = 0) {
      cartNumber = cartNumber;
    }
  });

  /* The else if statement at the end if this fuction prevents the cart number
  from ever going below 0 when removing items from the cart. A negative number in
  the cart would not make sense, and without this statement the "remove" logic would
  put the item number in the negative. */

  document.querySelector("#add2").addEventListener("click", function() {
    if (cartNumber >= 0) {
      cartNumber = cartNumber + 1;
      document.getElementById("messages").innerHTML = "You have " + cartNumber + " items in your shopping cart";
    } else {
      cartNumber = cartNumber;
    }
  });

  document.querySelector("#remove2").addEventListener("click", function() {
    if (cartNumber > 0) {
      cartNumber = cartNumber - 1;
      document.getElementById("messages").innerHTML = "You have " + cartNumber + " items in your shopping cart";
    }
    else if (cartNumber = 0) {
      cartNumber = cartNumber;
    }
  });

  document.querySelector("#add3").addEventListener("click", function() {
    if (cartNumber >= 0) {
      cartNumber = cartNumber + 1;
      document.getElementById("messages").innerHTML = "You have " + cartNumber + " items in your shopping cart";
    } else {
      cartNumber = cartNumber;
    }
  });

  document.querySelector("#remove3").addEventListener("click", function() {
    if (cartNumber > 0) {
      cartNumber = cartNumber - 1;
      document.getElementById("messages").innerHTML = "You have " + cartNumber + " items in your shopping cart";
    }
    else if (cartNumber = 0) {
      cartNumber = cartNumber;
    }
  });

  document.querySelector("#add4").addEventListener("click", function() {
    if (cartNumber >= 0) {
      cartNumber = cartNumber + 1;
      document.getElementById("messages").innerHTML = "You have " + cartNumber + " items in your shopping cart";
    } else {
      cartNumber = cartNumber;
    }
  });

  document.querySelector("#remove4").addEventListener("click", function() {
    if (cartNumber > 0) {
      cartNumber = cartNumber - 1;
      document.getElementById("messages").innerHTML = "You have " + cartNumber + " items in your shopping cart";
    }
    else if (cartNumber = 0) {
      cartNumber = cartNumber;
    }
  });
