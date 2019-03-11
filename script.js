"use strict"; 

$(document).ready(() => {
    $.get('https://www.reddit.com/r/Cows/.json').then((data) => {
    console.log(data.data.children);
  
    for (let post of data.data.children.slice(0,10)) {
      console.log(post.data.url);
      console.log(post.data.url);   
      console.log(post.data.title);
  
      $("body").append(`
      <div class="cowcontainer">
        <h4 class="title">${post.data.title}</h4>
        <img src="${post.data.preview.images["0"].source.url}" class="cow_pic">
        <a href="${post.data.url}" class="cow_link"><img src="moo_time.png" class="cow_icon"></a>
      </div>
      `) 
     }
    });
  }) 