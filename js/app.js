// jQuery area
$(document).ready(function(){
    $(".test-popup-link").magnificPopup({
        type: 'image'
    })
});





// javascript area
// start about section
const myservicecontent = document.querySelector('.service-content');
const myservicequote = document.querySelector('.service-quote');

const testimonials = [
    {
        content:"Decoration",
        quote:"To make peaceful for your mind."
    },

    {
        content:"Drinks and Foods",
        quote:"Delicious drinks and foods to make you pleased."
    },

    {
        content:"Free Wifi",
        quote:"Best wifi to work to researh to study."
    },

    {
        content:"Party",
        quote:"Can book for a party."
    },

    {
        content:"Quiet Place",
        quote:"Best place to read to work to date."
    }
]

let idx = 0;

function updatetestimonial(){
    const {content,quote} = testimonials[idx];

    myservicecontent.textContent = content;
    myservicequote.textContent = quote;

    idx++;

    if(idx > testimonials.length-1){
        idx = 0;
    }
}

setInterval(updatetestimonial,5000);
// end about section