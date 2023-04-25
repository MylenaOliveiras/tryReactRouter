export interface IPersonCards {
  name: string;
  position: string;
  image: string;
  team: string;
  primaryColor: string;
}
export default function PersonCard({
  name,
  position,
  image,
  primaryColor,
}: IPersonCards) {
  return (
    <div className="w-64 bg-white rounded-xl center min-w-min pb-4 my-10">
      <header className={`h-24 rounded-t-xl	-mb-14 ${primaryColor}`}></header>
      <img src={image} className="w-32 rounded-full mx-auto" />
      <h1 className="text-purple font-montserrat font-semibold text-lg pt-3 ">
        {name}
      </h1>
      <p className="pt-2 break-words font-montserrat text-base	">{position}</p>
    </div>
  );
}
