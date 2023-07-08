type Character = {
  name: string;
  origin:{
    name: string;
  }
  image: string;
};

export default function Character({name, origin, image }: Character) {
  return (
    <div className="bg-amber-300 text-slate-800 text-center hover:rounded-3xl transition-all cursor-pointer hover:scale-110 shadow-lg">
      <img src={image} /> <br />
      {name} <br />
      {origin.name}
    </div>
  );
}
