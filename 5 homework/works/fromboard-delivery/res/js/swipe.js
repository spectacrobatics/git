let review = new Map();
review.set("Anna","Заказал шикарные часы из Швейцарии, и доставка была невероятно быстрой. Ваш сервис делает интернет-шоппинг более доступным и удобным");
review.set("Паша","Я заказал редкий антикварный предмет из Японии через ваш сервис, и остался впечатлен. Все пришло в отличном состоянии, и ваша гарантия качества действительно работает. Спасибо за ваше профессиональное обслуживание");
review.set("Алексей","Я уже несколько лет заказываю дизайнерскую одежду из Франции через ваш сервис, и он никогда меня не подводил.");
review.set("Анна","Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным");
function randomKeys(){
    let keys = Array.from(review.keys());
return keys[Math.floor(Math.random() * keys.length)];
}

function swipeRight(){
    let randomKey;
    do{
        randomKey = randomKeys();
    }
    while(document.getElementById("review-author-second").innerHTML === (randomKey = randomKeys()));
    
    document.getElementById("review-author-first").innerHTML = document.getElementById("review-author-second").innerHTML;
    document.getElementById("review-text-first").innerHTML = document.getElementById("review-text-second").innerHTML;
    document.getElementById("review-text-second").innerHTML = review.get(randomKey);
    document.getElementById("review-author-second").innerHTML = randomKey;
     
}

function swipeLeft(){
    let randomKey;
    do{
        randomKey = randomKeys();
    }
    while(document.getElementById("review-author-first").innerHTML === (randomKey = randomKeys()));
    document.getElementById("review-author-second").innerHTML = document.getElementById("review-author-first").innerHTML;
    document.getElementById("review-text-second").innerHTML = document.getElementById("review-text-first").innerHTML;
    document.getElementById("review-text-first").innerHTML = review.get(randomKey);
    document.getElementById("review-author-first").innerHTML = randomKey;
}