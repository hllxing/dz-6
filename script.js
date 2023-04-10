let action = prompt('Оберіть дію: add, sub, mult, div');
if (action==='add' || action==='sub' || action==='mult' || action==='div'){
    let a = prompt('Введіть число a');
    let b = prompt('Введіть число b');
    let sum = '';
    let diff = '';
    let multi = '';
    let seg = '';
    switch (action) {
        case 'add':
            sum = Number(a) + Number(b);
            alert(a + ' + ' + b + ' = ' + sum);
            break;
        case 'sub':
            diff = Number(a) - Number(b);
            alert(a + ' - ' + b + ' = ' + diff);
            break;
        case 'mult':
            multi = Number(a) * Number(b);
            alert(a + ' * ' + b + ' = ' + multi);
            break;
        case 'div':
            seg = Number(a) / Number(b);
            if (Number(b)!==0){
                alert(a + ' / ' + b + ' = ' + seg);
            } else alert('На нуль ділити не можна')
            break;
    }
}else alert('Дія введена неправильно!')

