let countElement = document.querySelector('#counter');
let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let message = document.querySelector('#message');

// Boshlang'ich qiymat
let count = 0;

// btn2 bosilganda hisobni nolga tushirish
btn2.addEventListener('click', function() {
    count = 0;
    countElement.textContent = count;
    message.textContent = "";
    btn2.style.display = "none";
    btn.style.display = "inline-block";
});

// btn bosilganda hisobni oshirish
btn.addEventListener('click', function() {
    count++;
    countElement.textContent = count;

    if (count === 33) {
        message.textContent = "🎉 33 ga yetdingiz – barakalla!";
    } else if (count === 66) {
        message.textContent = "💪 66 ta bo‘ldi – yaxshi ketayapsiz!";
    } else if (count === 99) {
        message.textContent = "🌟 99 ta – zo‘r natija!";
    } else if (count === 100) {
        message.textContent = "Natija yaxshi endi yangilash tugmasini bosib boshqatadan boshlang ";
        btn.style.display = "none";
        btn2.style.display = "inline-block";
    }else{
        message.textContent = ' '
    }
    });

// Dastlab btn2 ni yashirib qo'yamiz
btn2.style.display = "none";