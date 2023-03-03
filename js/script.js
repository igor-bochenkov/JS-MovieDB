//База данных пользователя
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	//Вопрос пользователю про кол-во просмотренных фильмов
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	//Оценка пользователя по количеству просмотренных фильмов
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('Посмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			alert('Вы киноман!');
		} else {
			alert('Произошла ошибка!');
		}
	},
	//Пополнение пользователем базы данных новыми фильмами и их оценка
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних посмотренных фильмов?', '').trim(),
				b = prompt('На сколько оцените его?', '');
			if (a != '' && b != '' && a != null && b != null && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				alert('Введены некорректные данные!');
				i--;
			}
		}
	},
	//Определение трёх любимых жанров пользователя с выводом данных в консоль
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
			if (genre != '' && genre != null) {
				personalMovieDB.genres[i - 1] = genre;
				//personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
			} else {
				alert('Введены некорректные данные!');
				i--;
			}
		}
		personalMovieDB.genres.forEach((value, index) => {
			console.log(`Любимый жанр #${index + 1} - это ${value}`);
		});
	},
	//Включение режима приватности (вывод в консоль главного объекта программы)
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	//Метод проверки и переключения свойства privat
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
};

//Вызов методов
// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();