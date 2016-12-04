foo();
function foo(){

	for (var j = 0; j < 2; j++) {
		var list = document.getElementsByClassName("r" + j);
		// alert("a");

		for (var i = 0; i <list.length; i++){

			var td = list[i].getElementsByTagName("td");
			// alert(td[2].innerHTML);
			var strr = td[2].innerHTML.trim();

			if (strr.match(/compile/)){
				td[2].innerHTML = "Did compile :)";
				td[5].className = "passed";
			}else{

				var l = strr.substr(strr.indexOf(' / ')+3, strr.length);
				var result = l + ' / ' + l;
				td[2].innerHTML = result;

				for (k = 6; k < td.length; k ++){
					td[k].className = "passed";
				}
			}
		}
	}
}