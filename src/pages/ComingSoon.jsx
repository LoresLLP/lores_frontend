import BgWCS from "../assets/BgWCS.gif";

const ComingSoon = () => {
  return (
    <div
      className="flex justify-between flex-col absolute left-0 top-0 w-full h-full overflow-hidden"
      style={{
        backgroundImage: `url(${BgWCS})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    ></div>
  );
};

export default ComingSoon;
