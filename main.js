let animeOne = document.getElementById('animeOne')
let animeTwo = document.getElementById('animeTwo')
let animeThree = document.getElementById('animeThree')


let tittle = document.getElementById('tittle');
let paragraph = document.getElementById('paragraph');



animeOne.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('/image/BlueLock.jpg')";
    tittle.textContent = "Blue Luck"
    paragraph.textContent = "A história tem foco no futebol com o protagonista Yoichi Isagi, um promissor atacante na escola, participando do chamado Blue Lock, uma prisão onde 300 jogadores devem competir para decidir quem será o “camisa nove” da seleção japonesa na Copa do Mundo."


    animeTwo.classList.remove('active')
    animeThree.classList.remove('active')
    
    animeOne.classList.add('active')
});

animeTwo.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('/image/JujutsuKaisen.jpg')";
    tittle.textContent = "Jujutsu Kaisen"
    paragraph.textContent = "Jujutsu Kaisen é um anime sombrio que lida com elementos sobrenaturais como maldições, espíritos e feitiçaria. O anime começa com a morte do avô do protagonista, Yuji Itadori. Antes de morrer, ele pede que Itadori viva uma vida em que ele possa escolher como morrer sem ter arrependimentos."



    animeOne.classList.remove('active')
    animeThree.classList.remove('active')

    animeTwo.classList.add('active')
});

animeThree.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('/image/DemonSlayer.jpg')";
    tittle.textContent = "Demon Slayer"
    paragraph.textContent = "Desde sua estreia em 2019, o anime se tornou uma febre e um dos maiores sucessos da atualidade ao mostrar a história de Tanjiro Kamado, um jovem gentil que um dia descobre que sua família foi assassinada por demônios no Japão no início do século XX."



    animeOne.classList.remove('active')
    animeTwo.classList.remove('active')
    
    animeThree.classList.add('active')
});
