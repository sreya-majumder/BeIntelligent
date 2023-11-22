import Genre from "./Genre";

export default function SelectGenre() {
    const genres = [
        "all",
        "romance",
        "fiction",
        "young-adult",
        "fantasy",
        "science-fiction",
        "non-fiction",
        "children",
        "history",
        "mystery",
        "covers",
        "horror",
        "historical-fiction",
        "best",
        "gay",
        "titles",
        "paranormal",
        "middle-grade",
        "love",
        "contemporary",
        "historical-romance",
        "lgbt",
        "queer",
        "nonfiction",
        "thriller",
        "biography",
        "women",
        "series",
        "lgbtq",
        "classics",
        "title-challenge",
    ];
    return (
        <div>
            <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Select Your Favourite Genre
                </h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {genres.map((genre) => (
                        <Genre genre={genre}></Genre>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="btn btn-active btn-primary">
                        Finish
                    </button>
                </div>
            </div>
        </div>
    );
}
