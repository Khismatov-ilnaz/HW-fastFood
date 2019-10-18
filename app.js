console.log("12222223");

const hotDog = {
    id: 2379,
    image: "https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230",
    name: "Хот-дог куриный",
    price: "79 ₽",
    weight: "124 Г",
    calorie: "226 Ккал",
    squirrels: "Б: 12.6 г",
    fats: "Ж: 10.1 г",
    carbohydrates: "У: 24.3 г",
};
const imageHotDogEl = document.getElementById("image-1");
        imageHotDogEl.src = hotDog.image;
const nameHotDogEl = document.getElementById("name-1");
        nameHotDogEl.textContent = hotDog.name;
const priceHotDogEl = document.getElementById("price-1");
        priceHotDogEl.textContent = hotDog.price;
const weightHotDogEl = document.getElementById("weight-1");       
        weightHotDogEl.textContent = hotDog.weight;
const squirrelsHotDogEl = document.getElementById("squirrels-1");
        squirrelsHotDogEl.textContent = hotDog.squirrels;
const fatsHotDogEl = document.getElementById("fats-1");
        fatsHotDogEl.textContent = hotDog.fats;
const carbohydratesHotDogEl = document.getElementById("carbohydrates-1");
        carbohydratesHotDogEl.textContent = hotDog.carbohydrates;
const calorieHotDogEl = document.getElementById("calorie-1");
        calorieHotDogEl.textContent = hotDog.calorie;


const CheeseburgerDeLuxe = {
    id: 2382,
    image: "https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230",
    name: "Чизбургер Де Люкс",
    price: "124 ₽",
    weight: "226 Г",
    calorie: "193 Ккал",
    squirrels: "Б: 12.6 г",
    fats: "Ж: 6.6 г",
    carbohydrates: "У: 20.7 г",
};

const imageCheeseburgerDeLuxeEl = document.getElementById('image-2');
        imageCheeseburgerDeLuxeEl.src = CheeseburgerDeLuxe.image;
const nameCheeseburgerDeLuxeEl = document.getElementById('name-2');
        nameCheeseburgerDeLuxeEl.textContent = CheeseburgerDeLuxe.name;
const priceCheeseburgerDeLuxeEl = document.getElementById('price-2');
        priceCheeseburgerDeLuxeEl.textContent = CheeseburgerDeLuxe.price;
const weightCheeseburgerDeLuxeEl = document.getElementById('weight-2');       
        weightCheeseburgerDeLuxeEl.textContent = CheeseburgerDeLuxe.weight;
const squirrelsCheeseburgerDeLuxeEl = document.getElementById('squirrels-2');
        squirrelsCheeseburgerDeLuxeEl.textContent = CheeseburgerDeLuxe.squirrels;
const fatsCheeseburgerDeLuxeEl = document.getElementById('fats-2');
        fatsCheeseburgerDeLuxeEl.textContent = CheeseburgerDeLuxe.fats;
const carbohydratesCheeseburgerDeLuxeEl = document.getElementById('carbohydrates-2');
        carbohydratesCheeseburgerDeLuxeEl.textContent = CheeseburgerDeLuxe.carbohydrates;
const calorieCheeseburgerDeLuxeEl = document.getElementById('calorie-2');
        calorieCheeseburgerDeLuxeEl.textContent = CheeseburgerDeLuxe.calorie;