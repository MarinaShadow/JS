let n = 1000;
let num = 0;

for (let i = 0; ; i++) {
	n = n/2;
	num +=1;
    if (n < 50) {
		console.log('Результат = ' + n);
		console.log('num' + ' = ' + num);
        break;
    } 
}