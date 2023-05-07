var myslide = document.querySelectorAll('.mySlider'),
            dot = document.querySelectorAll('.dot');
            var counter =1;
            slideFun(counter);
            var timer = setInterval(autoSlide, 5000);

            function autoSlide() {
                counter +=1;
                slideFun(counter);
            }

            function plusSlide(n){
                counter += n;
                slideFun(counter);
                resetTimer();
            }

            function currentSlide(n){
                counter = n;
                slideFun(counter);
                resetTimer();
            }

            function resetTimer() {
                clearInterval(timer);
                timer = setInterval(autoSlide, 5000);
            }
            function slideFun(n){
                var i = 0; 
                for(i= 0; i <myslide.length; i++){
                    myslide[i].style.display ="none";
                }
                for(i = 0; i < dot.length; i++){
                    dot[i].classList.remove('active');

                }
                if(n > myslide.length){
                    counter = 1;
                }
                if(n < 1){
                    counter = myslide.length;
                }
                myslide[counter - 1].style.display = "block";
                dot[counter -1].classList.add('active');
            }

            function msgalert(){
                alert("Enjoy your songs by Logging In")
            }
            let active = document.querySelectorAll('h1');
            active.forEach( button =>{
               button.addEventListener('click', function(){
                   active.forEach(btn => btn.classList.remove('active'));
                   this.classList.add('active');
               }) 
            })