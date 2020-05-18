/* Form Submission
function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);



function getValue(){
    let checks = document.getElementsByClassName('checks');
    var str =" ";

    for (i=0; i<65;i++) {
        str += checks[i].value+"";
    }
}
alert(str); 

let btnShow = document.querySelector('button');
let result = document.querySelector('h1');

btnShow.addEventListener('click', ()=>{
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    result.innerText = checkbox.value;
    
})

function onSubmit(){
    let result=[];
    let answers=[];

    for ( let i = 0; i < 65; i++){
        if(document.forms['ingredients'].checked){
            answers.push(document.forms['ingredients']['answers'+(i + 1)].value);
        }
    }
    alert(result);

}

function validate (){
  let valid = false;
  
  if(document.getElementsByClassName("container").checked){
      valid=true;
  }

  if (valid){

  }
}

let checkedValue = null;
let inputElements = document.getElementsByClassName('container');
for (let i=0; inputElements[i]; ++i){
    if(inputElements[i].checked){
        checkedValue = inputElements[i].value;
        break;
    }
}

let checkMark= document.querySelectorAll('.container input').checked;
console.log(checkMark);


function myFunction() {
    let x = document.getElementsByTagName("value")
    if(x.checked = true){
        alert(checked);
    } 
}

myFunction;*/

 /*Results Alerted for boxes checked*/
function getSelectedCheckboxValues(name) {   
    const checkboxes = document.querySelectorAll('input[name="food"]:checked');
    let foods = [ ];
    checkboxes.forEach((checkbox) => {
        foods.push(checkbox.value);
    });  
    return foods;
}

/*const btn = document.querySelector('#btn');
btn.addEventListener('click',(event)=> {

    alert(getSelectedCheckboxValues('food'));
    console.log(getSelectedCheckboxValues('food'))
  
});



 /*Google search API 

$("#form").submit(function(e) {
    e.preventDefault()

    let query = $("foods").val()

    const API_KEY = '14e3e033f3a7256243ec585f68266b7a'

    let url = 'http://api.serpstack.com/search?access_key='+ API_KEY + '&type=web&query=' + query
    console.log(url)

    $.get(url, function (data) {
        console.log(data)

        data.organic_results.forEach(res => {

            result =`
            
            <h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a>
            <p>${res.snipet}</p>

            `
            $("#result").append(result)
        });
    })
})

const btn = document.querySelector('#btn');
btn.addEventListener('click',(event)=> {

    let query = getSelectedCheckboxValues('food');
    const API_KEY = '14e3e033f3a7256243ec585f68266b7a'
    let url = 'http://api.serpstack.com/search?access_key='+ API_KEY + '&type=web&query=' + query
    console.log(url)
    
    jQuery(document).ready(function($){
        $.get(url, function (data) {
            
            $("#result").html('')
            
            console.log(data)

            data.organic_results.forEach(res => {

                result =`
                
                <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
                <h6>${res.snippet}</h6>

                `
                $("#result").append(result)
            });
        })
    });
});*/
/*
const btn = document.querySelector('#btn');
btn.addEventListener('click',(event)=> {

    let query = getSelectedCheckboxValues('food');
    let url = 'https://cors-anywhere.herokuapp.com/https://www.google.com/search?q='+query+'&tbm=isch&ved=2ahUKEwiQzZmCs7bpAhVI9KwKHaAVB8EQ2-cCegQIABAA&oq='+query+'&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEBg6BAgAEB46BggAEAUQHjoGCAAQCBAeOgQIABBDOgcIIxDqAhAnUMiVLliFlS9g56YvaAJwAHgAgAGtAogBkw6SAQgyMC4xLjEuMZgBAKABAaoBC2d3cy13aXotaW1nsAEK&sclient=img&ei=B9K-XtCtDMjoswWgq5yIDA&bih=700&biw=1385'  
    
    console.log(url)
    
    jQuery(document).ready(function($){
        
        $.get(url, function (data) {
            data = JSON.parse(data);
            $("#result").html('')
            
            console.log(data)

            data.organic_results.forEach(res => {

                result =`
                
                <a target="_blank" href="${res.url}"><h1>${res.title}</h1></a>
                <h6>${res.snippet}</h6>
                <img src="">
                <br>

                `
                $("#result").append(result)
            });
        })
    });
});




const btn = document.querySelector('#btn');
btn.addEventListener('click',(event)=> {

    let query = getSelectedCheckboxValues('food');
    const API_KEY = '14e3e033f3a7256243ec585f68266b7a'
    let url = 'http://api.serpstack.com/search?access_key='+ API_KEY + '&type=web&query=' + query
    console.log(url)
    
    jQuery(document).ready(function($){
        $.get(url, function (data) {
            
            $("#result").html('')
            
            console.log(data)

            data.organic_results.forEach(res => {

                result =`
                
                <a target="_blank" href="${res.url}"><h1>${res.title}</h1></a>
                <h6>${res.snippet}</h6>
                <br>

                `
                $("#result").append(result)
            });
        })
    });

});*/



const btn = document.querySelector('#btn');
btn.addEventListener('click',(event)=> {

    let query = getSelectedCheckboxValues('food');
    const API_KEY2 = '87f01e20-9878-11ea-8e96-2f329e06237a'
    let url = 'https://app.zenserp.com/api/v2/search?apikey='+ API_KEY2 +'&q='+query+'&tbm=isch&device=desktop&gl=US&hl=en&location=United%20States'
    
    console.log(url)
    
    jQuery(document).ready(function($){
        $.get(url, function (data) {
            
            $("#result").html('')
            
            console.log(data)
            let tbm= "isch"
            data.image_results.forEach(res => {

                result =`
                <img src="${res.sourceUrl}  "
                <a target="_blank" href="${res.link}"><img width='200px' ${res.thumbnail}></a>
                <a target="_blank" href="${res.link}"><h5>${res.title}</h5>  </a>
            
                <br>

                `
                $("#result").append(result)
            });
        })
    });
});
