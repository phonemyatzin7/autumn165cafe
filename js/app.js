// jQuery area
$(document).ready(function(){
//     $(".test-popup-link").magnificPopup({
//         type: 'image'
//     })


// start modal-box area
        $("#bookingbtn").click(function(e){
            $('#bookingmodal').modal("show");

            e.preventDefault();
        });

        $("#bookingdate").datepicker({
            numberofMonths: 1,
            dateFormat: "dd/mm/yy",
            minDate: 0,
            autoHide: true
        });
// end modal-box area



        $(window).scroll(function(){
            let getscrollpoint = $(this).scrollTop();
            // console.log(getscrollpoint);

            if(getscrollpoint >= 250){
            $(".booking").addClass("fromlefts");
            $(".bookingpic").addClass("fromrights");
        }else{
            $(".booking").removeClass("fromlefts");
            $(".bookingpic").removeClass("fromrights");
        }
        });
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
        quote:"Best wifi to work, to researh, to study."
    },

    {
        content:"Party",
        quote:"Can book for a party."
    },

    {
        content:"Quiet Place",
        quote:"Best place to read, to work, to date."
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


// start contact section
function tabbox(name,ele){
    var i,tabcontact;
    
    tabcontacts = document.getElementsByClassName('tabcontacts');
    for(i=0;i<tabcontacts.length;i++){
        tabcontacts[i].style.display = "none";
        tabcontacts[i].style.height = "300px";
    }

    document.getElementById(name).style.display = "block";
    document.getElementById(name).style.height = "300px";
}

document.getElementById('autoopen').click();
// end contact section


// start footer
    let autoyear = document.getElementById('getyear');
    let getyear = new Date().getUTCFullYear();
    autoyear.textContent = getyear;
// end footer
