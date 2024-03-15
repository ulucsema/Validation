var models = [
    {
        name :'bmw m5',
        image : 'BMW-M5.jpg',
        link:'http://www.arabalar.com/bmw'
    },
    {
        name :'Mercedes',
        image : 'mercedes.jpg',
        link:'http://www.arabalar.com/mercedes'
    },
    {
        name :'Porche 911',
        image : 'porche-911.jpg',
        link:'http://www.arabalar.com/porche911'
    },
    {
        name :'Ferrari',
        image : 'ferrari.jpg',
        link:'http://www.arabalar.com/ferrari'
    },

];

var slaytCount = models.length;
var index=0;

function showSlide(i)
{
    index = i;

    if(i<0)
    {
        index = slaytCount -1;
    }
    if(i>=slaytCount)
    {
        index = 0;
    }
    console.log(models[index].name);
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    document.querySelector('.card-title').textContent = models[index].name;

}

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});