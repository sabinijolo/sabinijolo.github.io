const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, this will be my last straw to show you how serious I truly am.\n\nWe both tried. I know this may seem strange, especially since you’ve always been clear with me,.”\n\nbut for once I want you to know that I’m willing to take a risk when it comes to you.\n\nI’m writing this letter to invite you on an actual date with me before the year ends.\n\nIt’s completely okay if you say no, but your presence would mean a lot to me`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

