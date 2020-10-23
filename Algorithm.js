
/*  
	**
	**1.1有多少个苹果可以分配
	** 苹果总数为S

*/

for( var s = 5;;s++){
	if(s % 5 == 1){
		l = s - Math.round(s/5) - 1;

		if(l % 5 == 1){
			k = l - Math.round(l/5) - 1;

			if(k % 5 == 1){
				m = k - Math.round(k/5) - 1;

				if(m % 5 == 1){
					n = m - Math.round(m/5) - 1;

					if(n % 5 == 1){
						f = n - Math.round(n/5) - 1;


						if(f % 5 == 1){
							console.log(s);
							// console.log(l);
							// console.log(k);
							// console.log(m);
							// console.log(n);
							// console.log(f);

							if(s > 10000000) break;
							
						}
					}
				}
			}
		}
	}
}


/*  
	**
	**1.2哪一只猴子可以当大王
	**

*/



function monkeyKing(n,m){
	var monkeys = new Array(n + 1).join("0").split("").map((value,key)=>key+1)
	if(n === 1) return monkeys[0];
	var i = 1;
	//3 in 5
	//4 in 6
	//5 in 7
	while(monkeys.length - 2 in monkeys){ 
		// 5----true------1,2,3,(4),5
		// 6----true------,2,3,4,(5),1
		// 6----true------,,3,4,(5),1
		// 7----true------,,,4,5,(1),3
		// 7----true------,,,,5,(1),3
		// 8----true------,,,,,1,(3),5
		// 8----true------,,,,,,(3),5
		// 9----true------,,,,,,,(5),3
		// 9----false-----,,,,,,,(),3
		console.log(monkeys.length +"----"+(monkeys.length - 2 in monkeys) +"------"+monkeys)
		if (i%m == 0) {
			delete monkeys[i-1]
		}else{
			monkeys.push(monkeys[i-1]);
			delete monkeys[i-1]
		}
		i++
	}	
	return monkeys[monkeys.length - 1]
}

var monkey = monkeyKing(5,2);
console.log(monkey);







