var page=0;
page++;



function beginStory() {
  window.open('climate-story.html', "Save the Animals!", "height=600,width=737,directories=no,location=no,resizable=yes,menubar=no,toolbar=no,scrollbars=yes");
}

function nextA() {

    if (page===0){
      document.getElementById("storywords").innerHTML=(`<div>You are a ten year old walking home from school. On your
        way home you notice a lot of trash littering the street.
        <br>
        <br>
        <em>That’s sad</em>, you think, <em>I wish the street was cleaner.</em>
        <br>
        <br>
        The next day you notice the same thing. And the day after.
        On the third day you decide to:</div>`);

      document.getElementById("storypic").src="prevent.jpg";

      document.getElementById("choiceA").innerHTML="Tell your teacher tomorrow";
      document.getElementById("choiceB").innerHTML="Ignore it and continue on your way";

        page++;
    }
    else if (page===1){
      document.getElementById("storywords").innerHTML=(`<div> The next day you tell your teacher and start an enviornment club!
      Every week you and your classmates cleanup the streets around your school.<br> <br> Congratulations! You've saved the planet! </div>`);

      document.getElementById("storypic").src="happy.jpeg";

      document.getElementById("choiceA").innerHTML="Next";
      document.getElementById("choiceB").innerHTML="End Game";

        page++;
    }
    else if (page===2){
      document.getElementById("storywords").innerHTML=(`<div>You have three best freinds named Danny, Adison, and Freya.
       You live right next to each other and you go to the same school.<br><br> One day Danny said, "Wouldn't it be cool if we
       all went to school together?"<br><br> What do you say?
       </div>`);

      document.getElementById("storypic").src="car.jpg";

      document.getElementById("choiceA").innerHTML="That's stupid Danny. Nobody likes you.";
      document.getElementById("choiceB").innerHTML="That's a good idea! Let's talk to our parents!";

        page++;
    }
    else if (page===3){
      document.getElementById("storywords").innerHTML=(`<div>Danny gets very sad and stops hanging out with you.
      The year after the world's air becomes polluted and everyone dies.
       </div>`);

      document.getElementById("storypic").src="sad.jpg";

      document.getElementById("choiceA").innerHTML="Start Over";
      document.getElementById("choiceB").innerHTML="End Game";

        page++;
    }

    else if(page===4){
      page=0;
      nextA();
    }
}

  function nextB() {


    if (page===1){
      document.getElementById("storywords").innerHTML=`<div>You go home and stop thinking about it.
      Then the world explodes because litter is bad.</div>`;

      document.getElementById("storypic").src="sad.jpg";

      document.getElementById("choiceA").innerHTML="Start Over";
      document.getElementById("choiceB").innerHTML="End Game";

      page+=3;
    }

    else if (page===2){
        page=0;
        nextA;
    }

    else if (page===3){
      document.getElementById("storywords").innerHTML=(`<div>You guys start carpooling. It's a lot of fun!
     Your other best freinds Freya and Adison begin carpooling with you. Before you know it
      the entire school is carpooling! Congratulations! You've saved the world!
     </div>`);

    document.getElementById("storypic").src="kids.jpg";

    document.getElementById("choiceA").innerHTML="Start Over";
    document.getElementById("choiceB").innerHTML="End Game";
    page++;
  }
    else if(page===4){
      window.close();
    }
}
