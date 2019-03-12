								//ГАЛЕРЕЯ
window.onload = function () {
			var imgArr = document.getElementsByClassName('imgs');
			var modalWindow = document.getElementById('my__modal');
			var modalImg = document.getElementById('img01');
			var caption =document.getElementById('caption');
			var span = document.getElementById('close');
			var modalBlock = document.getElementById('modal__block');

				for(i=0;i<imgArr.length;i++){
					var picture = imgArr[i];
					picture.onclick = function(){
						openImg(this);
						}
					}
			function openImg(pic){
				modalWindow.style.display='block';
				modalBlock.style.transform = 'translateY(0%)';
				modalImg.src = pic.src;
				modalImg.alt = pic.alt;
	  			caption.innerHTML = modalImg.alt;
			}

			function close(){
				modalWindow.style.display ='none';
			}
			span.onclick = function(){
				modalBlock.style.transform = 'translateY(-500%)';
				setTimeout(	close, 500);
				}
			}
						// СЛАЙДЕР ЦЫТАТ
				var slideIndex = 1;
				showSlides(slideIndex);

			function plusSlides(n) {
  				showSlides(slideIndex += n);
			}
			function currentSlide(n) {
  				showSlides(slideIndex = n);
			}
			function showSlides(n) {
 				var i;
  				var slides = document.getElementsByClassName("mySlides");
  				var dots = document.getElementsByClassName("dot");
  					if (n > slides.length) {slideIndex = 1} 
  					if (n < 1) {slideIndex = slides.length}
  					for (i = 0; i < slides.length; i++) {
      					slides[i].style.display = "none"; 
  					}
  					for (i = 0; i < dots.length; i++) {
      					dots[i].className = dots[i].className.replace(" active", "");
  					}
  					slides[slideIndex-1].style.display = "block"; 
  					dots[slideIndex-1].className += " active";
					}

      //Фщрма для отправки сообщений
//указываем каким способом будут передаваться данные и какому файлу. 
//В данном случае все передачется методом POST файлу send.php. 
//Программа в этом файле соответственно должна принять данные, 
//они будут содержаться в post массиве, и отправить их на указанный email адрес.

//создаем переменные:
$fio = $_POST['name'];
$email = $_POST['email'];
$title = $_POST['title'];
$comment = $_POST['comment'];

//Для целей защиты своего сайта нужно провести эти переменные через несколько фильтров - функций php.
//Первая функция преобразует все символы, которые пользователь попытается добавить в форму:
//При этом новые переменные в php не создаются, а используются уже имеющиеся. Что сделает фильтр, 
//он преобразует символ "<" в '&lt;'. Также он поступить с другими символами, встречающимися в html коде.
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$title = htmlspecialchars($title);
$comment = htmlspecialchars($comment);

//Вторая функция декодирует url, если пользователь попытается его добавить в форму.
$fio = urldecode($fio);
$email = urldecode($email);
$title = urldecode($title);
$comment = urldecode($comment);

//Третей функцией мы удалим пробелы с начала и конца строки, если таковые имеются
$fio = trim($fio);
$email = trim($email);
$title = trim($title);
$comment = trim($comment);

// echo $fio;
// echo "<br>";
// echo $fio;

// mail("ryssvoboda@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email , "Title:".$title , "comment:".$comment, "From: ryssvoboda@gmail.com \r\n");
// if (mail("ryssvoboda@gmail.com", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: ryssvoboda@gmail.com \r\n"))
//  { 
//     echo "сообщение успешно отправлено"; 
// } else { 
//     echo "при отправке сообщения возникли ошибки"; 
// }