
//1
const button  = document.querySelector(".btn")


button.addEventListener("click", function () {
    alert("Hello,Palmo!")
})


//2

function replaceText() {
    const input = document.getElementById('userInput');
    input.value = "Hello, World!";
}

document.getElementById('changeTextBtn').addEventListener('click', replaceText);

// //3

const button3 = document.getElementById("button3")
button3.addEventListener('click', function() {
    const userInput = document.getElementById('userInput3').value;
    console.log(userInput);
});

//4
const button4 = document.getElementById("button4");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");

button4.addEventListener('click', function() {
    const tempText = header1.textContent;
    header1.textContent = header2.textContent;
    header2.textContent = tempText;
});

//5

const paragraph = document.getElementById("paragraph");
const pbttn = document.getElementById("pbttn");
pbttn.addEventListener("click", function() {
    if (paragraph.style.color === "red") {
        paragraph.style.color = "";
    }else {
        paragraph.style.color = "red";
    }
});

//6

const button6 = document.getElementById("button6");
const userInput6 = document.getElementById("userInput6");

button6.addEventListener('click', function() {
    userInput6.disabled = !userInput6.disabled;
})

//7

const greenSquare = document.getElementById('greenSquare');
const redSquare = document.getElementById('redSquare');

greenSquare.addEventListener('click', function() {
    if (greenSquare.classList.contains('green')) {
        greenSquare.classList.remove('green');
        greenSquare.classList.add('red');
    } else {
        greenSquare.classList.remove('red');
        greenSquare.classList.add('green');
    }
});

redSquare.addEventListener('click', function() {
    if (redSquare.classList.contains('red')) {
        redSquare.classList.remove('red');
        redSquare.classList.add('green');
    } else {
        redSquare.classList.remove('green');
        redSquare.classList.add('red');
    }
});

//8
const listButton = document.getElementById("listButton");
const list = document.getElementById("list");
let numbers = 1

listButton.addEventListener("click", function (){
    const listNum = document.createElement("li");
    listNum.textContent = `${numbers}`
    list.appendChild(listNum);
    numbers ++

})

//9

document.getElementById("button9").addEventListener("click", function (){
    const textareaValue  = document.getElementById("myTextarea").value;
    const items = textareaValue.split(',').map(item => item.trim());
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    items.forEach((item, index) => {

        if (item) { // Проверяем, что элемент не пустой
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${item}`;
            resultList.appendChild(li);
        }
    });


    })

//10

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Get form elements
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    document.querySelectorAll('.error').forEach(function(error) {
        error.style.display = 'none';
    });
    document.querySelectorAll('.form-group input').forEach(function(input) {
        input.classList.remove('error');
    });

    if (username.value.length < 4 || username.value.length > 20 || /[._/\\|,]/.test(username.value)) {
        isValid = false;
        username.classList.add('error');
        document.getElementById('usernameError').textContent = 'Логин должен быть от 4 до 20 символов и не содержать . _ / \\ | ,';
        document.getElementById('usernameError').style.display = 'block';
    }

    if (email.value.trim() === '' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        isValid = false;
        email.classList.add('error');
        document.getElementById('emailError').textContent = 'Введите корректный email';
        document.getElementById('emailError').style.display = 'block';
    }

    if (age.value.trim() === '' || isNaN(age.value) || parseInt(age.value) < 0) {
        isValid = false;
        age.classList.add('error');
        document.getElementById('ageError').textContent = 'Возраст должен быть числом и не может быть отрицательным';
        document.getElementById('ageError').style.display = 'block';
    }

    if (password.value.length < 6 || !/[A-Z]/.test(password.value) || !/\d/.test(password.value)) {
        isValid = false;
        password.classList.add('error');
        document.getElementById('passwordError').textContent = 'Пароль должен быть не менее 6 символов, содержать хотя бы одну заглавную букву и одну цифру';
        document.getElementById('passwordError').style.display = 'block';
    }

    if (confirmPassword.value !== password.value) {
        isValid = false;
        confirmPassword.classList.add('error');
        document.getElementById('confirmPasswordError').textContent = 'Пароли не совпадают';
        document.getElementById('confirmPasswordError').style.display = 'block';
    }

    if (isValid) {
        alert('Регистрация пройдена успешно. Добро пожаловать!');
        document.getElementById('userForm').reset();
    }
});

//12

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.getElementById('close-modal');
    const cartItems = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            cart.push(product);
            alert(`${product} added to cart`);
        });
    });

    cartIcon.addEventListener('click', () => {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
        cartModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    clearCartButton.addEventListener('click', () => {
        cart.length = 0;
        cartItems.innerHTML = '';
        alert('Cart cleared');
    });

    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });
});