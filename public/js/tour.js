/* globals hopscotch: false */

/* ============ */
/* EXAMPLE TOUR */
/* ============ */
var homepage = {
  id: 'homepage',
  steps: [
    {
      target: 'news-section',
      title: 'Welcome to MoneyABCs',
      content: 'Hi, I am Mr. MoneyABCs. I can help you to make myself familiarize with you',
      placement: 'top',
      arrowOffset: 60,
      xOffset: 'center'
    },
    {
      target: 'first_result',
      title: 'Confuse Where to begin?',
      content: 'Here is what is trending in the news about personal finance and financial literacy. Visit everyday for fresh articles',
      placement: 'top',
      yOffset: -20
    },
    {
      target: 'share',
      placement: 'top',
      content: 'Share to your friends'
    },
    {
      target: 'email_1',
      placement: 'top',
      content: 'Mail to your friends'
    },
    {
      target: '1',
      placement: 'top',
      content: 'Add to your Profile'
    },
    {
      target: 'sub_resources',
      placement: 'top',
      title: 'Suprisee!!!!!!!!!!',
      content: 'We have lot of Presentations, Video and lot of study materials too!',
      xOffset: 'center'
    },
    {
      target: 'group-key',
      placement: 'bottom',
      title: 'Need more details? I do have lot in mine',
      content: 'You are looking for some article specifically. Please search here !'
    },
    {
      target: 'customize',
      placement: 'top',
      title: 'Well! are you bored of the layout and article selection?',
      content: 'Click on "Customize" button. I have more for you',
      onEnd: function() {
          alert ('done');
        }
    },
  ],
  showPrevButton: true,
  scrollTopMargin: 100
},
/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},
//add a check if the flag is in cookie
init = function() {
if (localStorage.getItem("tutorial1") != "done"){
        hopscotch.startTour(homepage);
    }

//if (typeof (Storage) !== "undefined") {
     // Store
    // localStorage.setItem("tutorial1", "done");
     // Retrieve
          //  alert(localStorage.getItem("tutorial1"));
      //  }
//set a flag in cookie
};
init();

var customoverlay = {
  id: 'customoverlay',
  steps: [
    {
      target: 'customize',
      title: 'This will be a cool feature for you',
      content: 'Here you can customize your board layout and the articles you are interested in',
      placement: 'bottom'
    },
    {
      target: 'schema',
      placement: 'bottom',
      xOffset : 'center',
      content: 'Click of the column of your interest that will ease your ready. It can be 2,3,4 or 6',
    },
      {
      target: 'next_topics',
      placement: 'bottom',
      xOffset : 'center',
      content: 'Goto the next page of customization',
    },
    {
      target: 'topics',
      placement: 'top',
      content: 'Choose the area of your interest. I will display the board depending on these topics. Select atleast more than 5 topics and click on "Save"',
      xOffset : 600,
    },
  ],
  showPrevButton: true,
  scrollTopMargin: 100
},
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
}
//add a check if the flag is in cookie
$(function () {
    $('.customize_button').on("click", function () {
       hopscotch.startTour(customoverlay); 
    });
});
