

const slides = document.querySelectorAll('.slides')

let  counter = 0;

slides.forEach(
    (slide,index)=>{
        slide.style.left =`${index * 100}%`

    })


    const slideImg = ()=>{
        slides.forEach((slide)=>{

            slide.style.transform = `translateX(-${counter *100}%)`

        })
    }


    document.getElementById('next').addEventListener('click' ,function(){

        counter++
        slideImg()
        

    })



    
    document.getElementById('prev').addEventListener('click' ,function(){

        counter--
        slideImg()
        

    })