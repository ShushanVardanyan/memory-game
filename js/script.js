var img1 = "";
var i = "";
var Source = "#cubic";


$(function() {
for (j= 1; j <=2 ; j++) {
	$.each(images, function(i, val) {
$(Source).append("<div id=cubic" + j + i + "><img src=" + val + " />");
	});
}
	$(Source + " div").click(open);
	
});

   

function open() {
	var img2= $(this).attr("id");
     if ($("#" + img2 + " img").is(":hidden")) {
		$(Source + " div").click(open);
	    $("#" + img2 + " img").slideDown('slow');
         if (i == "") {
			img1 = img2;
			i = $("#" + img2 + " img").attr("src");
		} else {
			c = $("#" + img2 + " img").attr("src");
				if (i != c) {
					$("#" + img2 + " img").slideUp('slow');
					$("#" + img1 + " img").slideUp('slow');
					img1 = "";
					i = "";
			  } else {
				$("#" + img2 + " img").parent().css("visibility", "visible");
			    b = "";
				i = "";
			}
				$(Source + " div").click(open);
		}
	}
}




var images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5U4b5vW8P6e4QKsUQ96Cc8y2GvsBUu9IdbccoZobMzZh-igK",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGkfIjrQAkjykCKKQxEHQm94ousyO4VazsH6c7pbADUMqlFWm0Q", 
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXg7INVrQ8Gk2xk_NyZHw96KEWsrPgcjMKWTYvZZpaqMp3mxI5",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUAl0pDQ74IW-gDhNgY3V151F_qKAtZ8k8ipQdKPvPNrqGWuu ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnG04jvwdwceoRCdTZTumZwRO19KryOSLUm0vCVkCN2FYWmYco",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvxKewPYzYtsrv6ZyjHSaJxZfpzk5jb5TQCTdBZHVHVtkwzt7"
];



function shuffle(array) {
  var current = array.length, temporary, random;
  while (0 !== current) {
    random = Math.floor(Math.random() * current);
    current=current-1;
    temporary = array[current];
    array[current] = array[random];
    array[random] = temporary;
  }
 return array;
}



images=shuffle(images);