const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//База данных пользователя
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

//Вопросы пользователю
const a = prompt('Один из последних посмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних посмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

//Запись ответов в базу данных
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


//Проверки (вывод в консоль)
console.log(personalMovieDB);