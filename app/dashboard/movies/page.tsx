import Card from "@/app/ui/dashboard/Cards/Cards";
import { fetchMovies } from "@/app/lib/utils";
import Link from "next/link";
import UpdateMovieButton from "@/app/ui/dashboard/UpdateMovieButton/UpdateMovieButton";
import DeleteMovieButton from "@/app/ui/dashboard/DeleteMovieButton.tsx/DeleteMovieButton";
import { Metadata } from "next";
export const metadata:Metadata = {
  title:"Movies",
}
const Moviespage = async () => {
  const movies = await fetchMovies();
  return (
    <div className="flex flex-wrap gap-10 mt-5">
      {movies.map((movie) => {
        return (
          <div key={movie.movie_id} className="h-3/2 gap-y-2">
            <Link
              href={`/dashboard/movies/${movie.movie_id}`}
              title={`Movie No. ${movie.movie_id}`}
            >
              <Card name={movie.name} imageSrc={movie.imageSrc} />
            </Link>
            <div className="flex justify-between">
              <UpdateMovieButton id={movie.movie_id} />
              <DeleteMovieButton id={movie.movie_id}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Moviespage;
