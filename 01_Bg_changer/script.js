const buttons= document.querySelectorAll('.button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

buttons.forEach(
    function (button) {
        button.addEventListener('click', function(e){
            // console.log(e)
            // console.log(e.target)
            switch (e.target.id) {
                case 'grey':
                    body.style.backgroundColor = e.target.id;
                    h1.style.color= "black";
                    h2.style.color= "black";
                    break;
                case 'white':
                    body.style.backgroundColor = e.target.id;
                    h1.style.color= "black";
                    h2.style.color= "black";
                    break;
                case 'blue': 
                    body.style.backgroundColor = e.target.id;
                    h1.style.color= "white";
                    h2.style.color= "white";
                    break;
                case 'yellow': 
                    body.style.backgroundColor = e.target.id;
                    h1.style.color= "red";
                    h2.style.color= "red";
                    break;
                case 'red': 
                    body.style.backgroundColor = e.target.id;
                    h1.style.color= "white";
                    h2.style.color= "white";

                    break;
                case 'green': 
                    body.style.backgroundColor = e.target.id;
                    h1.style.color= "white";
                    h2.style.color= "white";

                    break;
                case 'brown': 
                    body.style.backgroundColor = e.target.id;
                    h1.style.color= "white";
                    h2.style.color= "white";
                    break;
                default:
                    break;
            }

        })
    }
)