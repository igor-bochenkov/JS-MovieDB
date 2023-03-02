//Блок объявления переменных
let numberOfFilms;

//Вопрос пользователю
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start();

//База данных пользователя
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

//Пополнение пользователем базы данных новыми фильмами и их оценка
function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних посмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');
		if (a != '' && b != '' && a != null && b != null && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			alert('Введены некорректные данные!');
			i--;
		}
	}
}

//Оценка пользователя по количеству просмотренных фильмов
function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Посмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман!');
	} else {
		alert('Произошла ошибка!');
	}
}

//Определение трёх любимых жанров пользователя
function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
		personalMovieDB.genres[i - 1] = genre;
		//personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
	}
}

//Включение режима приватности (вывод в консоль главного объекта программы)
function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

//Вызовы функций
showMyDB(personalMovieDB.privat);
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();

