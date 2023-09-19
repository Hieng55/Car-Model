const cars = [
    { id: 1, nameCar: "FERRARI", img: "img/img1.png" },
    { id: 2, nameCar: "ASTON", img: "img/img2.png" },
    { id: 3, nameCar: "BUGATTI", img: "img/img3.png" },
];

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slider = document.getElementById("slide");

let index = 0;

function showSlide(items) {
    const car = items[index];
    console.log(items[index]);
    slider;
    slider.innerHTML = `<div class="item">
                <div class="content">
                    <div class="left">
                        <h1>HIENDEV</h1>
                        <div class="des">
                        Super car limited edition of the rich.</br>
                        Experience the feeling of people with money.
                        </div>
                        <div class="more">
                            See more
                        </div>
                    </div>

                    <div class="right">
                        <h2>CONFIGURATION</h2>
                        <h3>${car.nameCar}</h3>
                        <ul>
                            <li>
                                <p>Overall length</p>
                                <span class="length"> <b>4780</b> mm</span>
                            </li>
                            <li>
                                <p>Front wheel track width</p>
                                <span class="width"><b>1720</b> mm</span>
                            </li>
                            <li>
                                <p>Dry weight</p>
                                <span class="dry"><b>1270</b> kg</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="image">
                    <img src="${car.img}" />
                </div>
            </div>`;
}

showSlide(cars);
prev.addEventListener("click", () => {
    setTimeout(() => {
        index--;
        if (index < 0) {
            index = cars.length - 1;
        }

        showSlide(cars);
        const image = document.querySelector(".image");
        image.classList.add("active");
        update();
    }, 1000);

    setTimeout(() => {
        image.classList.remove("active1");
    }, 1500);
    const image = document.querySelector(".image");
    image.classList.add("active1");
});
next.addEventListener("click", () => {
    setTimeout(() => {
        index++;
        if (index >= cars.length) {
            index = 0;
        }

        showSlide(cars);
        const image = document.querySelector(".image");
        image.classList.add("active");
        update();
    }, 1000);
    setTimeout(() => {
        image.classList.remove("active1");
    }, 1500);
    const image = document.querySelector(".image");
    image.classList.add("active1");
});

function update() {
    let number0 = document.querySelector(".right ul li .length b");
    let number1 = document.querySelector(".right ul li .width b");
    let number2 = document.querySelector(".right ul li .dry b");
    const counters = [
        { number: number0, stopValue: 4780, interval: 123, step: 235 },
        { number: number1, stopValue: 1720, interval: 12, step: 235 },
        { number: number2, stopValue: 1270, interval: 125, step: 235 },
    ];
    counters.forEach((counter) => {
        let count = counter.step;
        const intervalId = setInterval(() => {
            counter.number.innerHTML = count;
            count += counter.step;
            if (count > counter.stopValue) {
                clearInterval(intervalId);
            }
        }, counter.interval);
    });
}
