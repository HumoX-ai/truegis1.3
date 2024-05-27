function RatingReview({
  rating,
  setRating,
}: {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            className="start"
            style={{
              cursor: "pointer",
              color: rating >= star ? "#FF9500" : "#C8C7CB",
              fontSize: `22px`,
            }}
            onClick={() => {
              setRating(star);
            }}
          >
            {""}
            ★{""}
          </span>
        );
      })}
    </div>
  );
}

export default RatingReview;
