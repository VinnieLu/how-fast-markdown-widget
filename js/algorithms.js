function transform(str) {
	var final = "<h1>"
	var italic = false
	var bold = false
	for (var i = 0; i < str.length; i++) {
	  var litmus = i
		if (str[i] === "*" || str[i] === "_") {
			if (str[i] + str[i+1] === "**" || str[i] + str[i+1] === "__") {
				if (bold === true) {
					bold = false
					final += "</strong>"
					i += 1
				} else {
					bold = true
					final += "<strong>"
					i += 1
				}
			} else {
				if (italic === true) {
					italic = false
					final += "</i>"
					litmus += 1
				} else {
					italic = true
					final += "<i>"
					litmus += 1
				}
			}
		}
		if (litmus === i) {
		  final += str[i]
		}
	}
	final += "</h1>"
	return final
}