type Character = {
  id: number;
  name: string;
  origin: string;
  image: string;
};

export default function Character({name, origin, image }: Character) {
  return (
    <div className="w-auto">
      <img src={image.toString()} />
      {name.toString()}
      {origin.toString()}
    </div>
  );
}
