window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; // Fade out
    setTimeout(() => {
        preloader.style.display = "none"; // Remove from view
    }, 500); // Matches the fade-out duration
});

function change_color() {



    // var select = document.sel.selectedIndex;
    // var selected = document.sel[select].value;
    var a = document.getElementById("themes").value;
    var  imgbackground=document.getElementsByClassName("imgBg");
    var testimonials = document.getElementsByClassName("testimonials");
    console.log(imgbackground);
    // console.log(a);
    if (a == 1) {
        // window.location.reload();

        document.getElementById("banner").style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";

        document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";
        document.getElementById("footer").style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";

        // document.getElementByClassName("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
        document.getElementById("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";


        var many = document.getElementsByClassName("fas");
        for (i = 0; i < many.length; i++)

        // console.log(many);
            many[i].style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";

        var btn = document.getElementsByClassName("btn-primary");
        console.log(btn);
        for (i = 0; i < btn.length; i++)
            btn[i].style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";
    
        for (i = 0; i < imgbackground.length; i++)
        {
        imgbackground[i].classList.remove("imgBg3");    
        imgbackground[i].classList.remove("imgBg2");        
        imgbackground[i].classList.add("imgBg1");}

        for (i = 0; i < testimonials.length; i++)
        { testimonials[i].classList.remove("testimonials2");
        testimonials[i].classList.remove("testimonials3");
        testimonials[i].classList.add("testimonials1");}
    
    } else
    if (a == 2) {

        document.getElementById("banner").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";

        document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
        document.getElementById("footer").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";

        // document.getElementByClassName("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
        document.getElementById("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";


        var many = document.getElementsByClassName("fas");
        for (i = 0; i < many.length; i++)

        // console.log(many);
            many[i].style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";

        var btn = document.getElementsByClassName("btn-primary");
        console.log(btn);
        for (i = 0; i < btn.length; i++)
            btn[i].style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
 
        for (i = 0; i < imgbackground.length; i++)
            {
            imgbackground[i].classList.remove("imgBg3");    
            imgbackground[i].classList.remove("imgBg1");        
            imgbackground[i].classList.add("imgBg2");}

        for (i = 0; i < testimonials.length; i++)
        { testimonials[i].classList.remove("testimonials1");
        testimonials[i].classList.remove("testimonials3");
        testimonials[i].classList.add("testimonials2");}
        
        

    } else if (a == 3) {
        document.getElementById("banner").style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";

        document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";
        document.getElementById("footer").style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";

        // document.getElementByClassName("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
        // document.getElementById("btn-primary").style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";
        var btn = document.getElementsByClassName("btn-primary");
        console.log(btn);
        for (i = 0; i < btn.length; i++)
            btn[i].style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";

        var many = document.getElementsByClassName("fas");
        for (i = 0; i < many.length; i++)
        // console.log(many);
            many[i].style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";


            for (i = 0; i < imgbackground.length; i++)
                {
                imgbackground[i].classList.remove("imgBg1");    
                imgbackground[i].classList.remove("imgBg2");        
                imgbackground[i].classList.add("imgBg3");}
            
            for (i = 0; i < testimonials.length; i++)
            { testimonials[i].classList.remove("testimonials1");
            testimonials[i].classList.remove("testimonials2");
            testimonials[i].classList.add("testimonials3");}












    }


    document.getElementById("themes").append(selected);




}


const textElement=document.querySelector(".promo-title")
const textToType = 'BEST DIGITAL AGENCY !';
let textIndex = 0;

function typeText() {
    textElement.textContent = textToType.slice(0, textIndex);
    textIndex++;

    if (textIndex > textToType.length) {
        textIndex = 4;
    }

    setTimeout(typeText, 200);
     // Adjust typing speed (milliseconds)
}

typeText();

function showVideo(event) {
    event.preventDefault();
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'block';
}


function closeVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause(); // Stop the video
    videoPlayer.currentTime = 0; // Reset the video time
    videoContainer.style.display = 'none';
}


const modal = document.getElementById('modal');

function openModal() {
    modal.classList.add('active');
    // document.getElementById("bodd").style.backgroundColor="##0003";
    document.getElementById("bodd").style.opacity=0.2;

}

function closeModal() {
    modal.classList.remove('active');
    document.getElementById("bodd").style.opacity=1;

}


document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in-element");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    });

    fadeInElements.forEach((el) => observer.observe(el));
});


