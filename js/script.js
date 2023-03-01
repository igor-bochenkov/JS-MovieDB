const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//База данных пользователя
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

//Вывод сообщения пользователю по количеству просмотренных фильмов
if (personalMovieDB.count < 10) {
	alert('Посмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман!');
} else {
	alert('Произошла ошибка!');
}

//Вопросы пользователю и запись ответов в базу данных
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

//Проверки (вывод в консоль)
console.log(personalMovieDB);
