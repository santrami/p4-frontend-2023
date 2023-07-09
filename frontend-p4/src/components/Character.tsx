type Character = {
  name: string;
  origin:{
    name: string;
  }
  image: string;
  onClick: () => void;
};

export default function Character({name, origin, image, onClick }: Character) {
  return (
    <div className="bg-amber-300 text-slate-800 text-center hover:rounded-3xl transition-all cursor-pointer hover:scale-110 shadow-lg">
      <img className="hover:rounded-3xl" src={image} /> <br />
      {name} <br/>
      {origin.name}<br/>
      <button className="p-2 bg-slate-600 text-neutral-50 my-4" onClick={onClick}>Show Details</button>
      
    </div>
  );
}
