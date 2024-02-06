const fs = require("fs");
const sequelize = require("./config/db");
const Movie =require("./models/Movie");
const Genre = require("./models/Genre");
const Actor = require("./models/Actor");

//чтение json файла
const rawData = fs.readFileSync("movies.json");
const moviesData = JSON.parse(rawData);

// функция для импорта данных
async function importData(){
    try{
        //синхронизация моделей с БД
        await sequelize.sync({force: true});

        //проход по каждому фильму в массиве
        for (const movieData of moviesData){
            const genres = movieData.genres;
            const actors = movieData.actors;

            //создание запист фильма
            const movie = await Movie.create({
                title: movieData.title,
                releaseYear: movieData.releaseYear,
                plot: movieData.plot,
            });

            // создагте и нахождение жанров и установка их для фильми
            for (const genreName of genres) {
                const [genre] = await Genre.findOrCreate({
                    where: {name: genreName},

                });
                await movie.addGenre(genre);
            }
            //создание или нахождение актеров и установка их для фильма
            for (const actorName of actors){
                const [actor] = await Actor.findOrCreate({
                    where: { name: actorName},
                });
                await movie.addActor(actor);
            }
            console.log(`Фильм добавлен: ${movie.title}`);
        }

        console.log("Импорт данных завершен.");
    }catch (error){
        console.error("Ошибка при импорте данных:",error);
    }finally{
        await sequelize.close();
    }
}
importData();

