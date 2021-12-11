// Крестики-нолики

step = 1


function btn1 () { 
    // Получение значения в кнопке
    button = document.getElementById("id_1").innerHTML; // document.getElementById() - возвращает ссылку на элемент по его идентификатору (ID)
    if(button === "") {
        // По номеру шага определяем очередь. Если шаг имеет нечётное значение, то выставляется Х. В обратном случе - 0.
        if (step%2==1){ 
            cell = "X";
        }
        else{
            cell = "0";
        }
        // Записываем значение в кнопке
        document.getElementById("id_1").innerHTML  = cell;
        step = step + 1; 
    }
    // Вызов функции с проверкой хода
    check();     
}

// Здесь не знала, как оптимизировать код, поэтому прописала такую же функцию для каждой кнокпи. А если бы дедлайн не был до конца занятий, то сделала бы лучше))
function btn2 () {     
    button = document.getElementById("id_2").innerHTML;
    if(button === "") {
        if (step%2==1){
            cell = "X";
        }
        else{
            cell = "0";
        }
        document.getElementById("id_2").innerHTML  = cell;
        step=step+1;
    }
    check();     
}


function btn3 () {     
    button =document.getElementById("id_3").innerHTML;
    if(button === "") {
        if (step%2==1){
            cell = "X";
        }
        else{
            cell = "0";
        }
        document.getElementById("id_3").innerHTML  = cell;
        step=step+1;
    }
    check();     
}


function btn4 () {     
    button =document.getElementById("id_4").innerHTML;
    if(button === "") {
        if (step%2==1) {
            cell = "X";
        }
        else {
            cell = "0";
        }
        document.getElementById("id_4").innerHTML  = cell;
        step=step+1;
    }
    check();     
}


function btn5 () {     
    button =document.getElementById("id_5").innerHTML;
    if(button === "") {
        if (step%2==1) {
            cell = "X";
        }
        else {
            cell = "0";
        }
        document.getElementById("id_5").innerHTML  = cell;
        step=step+1;
    }
    check();     
}


function btn6 () {     
    button =document.getElementById("id_6").innerHTML;
    if(button === "") {
        if (step%2==1){
            cell = "X";
        }
        else{
            cell = "0";
        }
        document.getElementById("id_6").innerHTML  = cell;
        step=step+1;
    }
    check();     
}


function btn7 () {     
    button =document.getElementById("id_7").innerHTML;
    if(button === "") {
        if (step%2==1){
            cell = "X";
        }
        else{
            cell = "0";
        }
        document.getElementById("id_7").innerHTML  = cell;
        step=step+1;
    }
    check();     
}


function btn8 () {     
    button =document.getElementById("id_8").innerHTML;
    if(button === "") {
        if (step%2==1){
            cell = "X";
        }
        else{
            cell = "0";
        }
        document.getElementById("id_8").innerHTML  = cell;
        step=step+1;
    }
    check();     
}


function btn9 () {     
    button =document.getElementById("id_9").innerHTML;
    if(button === "") {
        if (step%2==1){
            cell = "X";
        }
        else{
            cell = "0";
        }
        document.getElementById("id_9").innerHTML  = cell;
        step=step+1;
    }
    check();     
}

// Функция проверки хода
function  check() {
    // Запись значений всех ячеек поля в переменные
    a1 = document.getElementById("id_1").innerHTML;
    a2 = document.getElementById("id_2").innerHTML;
    a3 = document.getElementById("id_3").innerHTML;
    b1 = document.getElementById("id_4").innerHTML;
    b2 = document.getElementById("id_5").innerHTML;
    b3 = document.getElementById("id_6").innerHTML;
    c1 = document.getElementById("id_7").innerHTML;
    c2 = document.getElementById("id_8").innerHTML;
    c3 = document.getElementById("id_9").innerHTML;
    func=[ 
        [a1,a2,a3],
        [b1,b2,b3],
        [c1,c2,c3]
    ]; // Поле
    // Проверка хода. Здесь перебираются все возможные комбинации.
    if (func[0][0]==="X" && func[0][1]==="X" && func[0][2]==="X"){
        alert('Победитель: Игрок 1');
        // Обновление страницы  
        location.reload();
    }
    else if (func[0][0]==="0" && func[0][1]==="0" && func[0][2]==="0"){
        alert('Победитель: Игрок 2');  
        location.reload();
    }
    else if (func[1][0]==="X" && func[1][1]==="X" && func[1][2]==="X"){
        alert('Победитель: Игрок 1');  
        location.reload();
    }
    else if (func[1][0]==="0" && func[1][1]==="0" && func[1][2]==="0"){
        alert('Победитель: Игрок 2');  
        location.reload();
    }
    else if (func[2][0]==="X" && func[2][1]==="X" && func[2][2]==="X"){
        alert('Победитель: Игрок 1');  
        location.reload();
    }
    else if (func[2][0]==="0" && func[2][1]==="0" && func[2][2]==="0"){
        alert('Победитель: Игрок 2');  
        location.reload();
    }
    else if (func[0][0]==="X" && func[1][0]==="X" && func[2][0]==="X"){
        alert('Победитель: Игрок 1');  
        location.reload();
    }
    else if (func[0][0]==="0" && func[1][0]==="0" && func[2][0]==="0"){
        alert('Победитель: Игрок 2');  
        location.reload();
    }
    else if (func[0][1]==="X" && func[1][1]==="X" && func[2][1]==="X"){
        alert('Победитель: Игрок 1');  
        location.reload();
    }
    else if (func[0][1]==="0" && func[1][1]==="0" && func[2][1]==="0"){
        alert('Победитель: Игрок 2');  
        location.reload();
    }
    else if (func[0][2]==="X" && func[1][2]==="X" && func[2][2]==="X"){
        alert('Победитель: Игрок 1');  
        location.reload();
    }
    else if (func[0][2]==="0" && func[1][2]==="0" && func[2][2]==="0"){
        alert('Победитель: Игрок 2');  
        location.reload();
    }
    else if (func[0][0]==="X" && func[1][1]==="X" && func[2][2]==="X"){
        alert('Победитель: Игрок 1');  
        location.reload();
    }
    else if (func[0][0]==="0" && func[1][1]==="0" && func[2][2]==="0"){
        alert('Победитель: Игрок 2');  
        location.reload();
    }
    else if (func[0][2]==="X" && func[1][1]==="X" && func[2][0]==="X"){
        alert('Победитель: Игрок 1');  
        location.reload();
    }
    else if (func[0][2]==="0" && func[1][1]==="0" && func[2][0]==="0"){
        alert('Победитель: Игрок 2');  
        location.reload();
    }
    // Предусматриваем возможность "ничьи" в случае, если все клетки заполнены, а победитель не определён.
    else if (step===10){ 
        alert('Ничья!');  
        location.reload(); 
    }
}
