import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg mt-10">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-5 flex flex-col gap-2"
        >
          <div className="size-10 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-lg font-semibold mt-1">{title}</h3>
          <p className="text-white-50 text-sm">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;