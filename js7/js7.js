"use strict";
let footer = $("footer")
let img;
let div;
let txt;

let credit = $("credit");
credit.style.color = "yellow";
credit.lastElementChild.style.color = "orange";

let clikedElement = function () {

  createContents(this);

};


let createFooter = function () {

    for (var i = 0; i < 3; i++) {

      div = document.createElement('div');
      div.setAttribute('class', 'footerCol');
      div.setAttribute('id', `col${i}`);
      div.addEventListener("click", clikedElement);
      footer.appendChild(div);

      img = document.createElement('img');
      img.setAttribute('width', '64');

      images();

    };
};


let images = function ()  {

  if (div.id === "col0") {

      div.appendChild(img);
      img.setAttribute('src', 'img/book-icon.png');
      img.setAttribute('alt', 'book icon');


  } else if (div.id === "col1") {

      div.appendChild(img);
      img.setAttribute('src', 'img/cog-icon.png');
      img.setAttribute('alt', 'cog icon');


  } else if (div.id === "col2") {

      div.appendChild(img);
      img.setAttribute('src', 'img/shield-icon.png');
      img.setAttribute('alt', 'shield icon');

  };
};


let createContents = function (target) {

    if (target.childNodes.length < 2) {

        let textDiv = document.createElement("div")
        target.appendChild(textDiv);

        let par = document.createElement("p");
        let h3 = document.createElement('h3');

        if (target.id === "col0") {

            txt = document.createTextNode('Always');
            h3.appendChild(txt);
            textDiv.appendChild(h3);

            txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else.");
            par.appendChild(txt);
            textDiv.appendChild(par);


        } else if (target.id === "col1") {

            txt = document.createTextNode('Three');
            h3.appendChild(txt);
            textDiv.appendChild(h3);

            txt = document.createTextNode("Have a cog icon above one of these columns if you're realy feeling espesially creative.");
            par.appendChild(txt);
            textDiv.appendChild(par);


        } else if (target.id === "col2") {

            txt = document.createTextNode('Columns');
            h3.appendChild(txt);
            textDiv.appendChild(h3);

            txt = document.createTextNode("The perfect place to talk about services. Becauce co-incidentally you have three of them.");
            par.appendChild(txt);
            textDiv.appendChild(par);
        };


    } else if (target.childNodes.length >= 2) {
        target.removeChild(target.lastElementChild);

  };
};



createFooter();
