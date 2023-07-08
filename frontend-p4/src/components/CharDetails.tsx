type CharacterDetails = {
    name: string;
    origin: {
        name:string;
    }
    image: string;
    onClick: () => void;

}

export default function CharDetails({ name, origin, image, onClick }: CharacterDetails) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Origin: {origin.name}</p>
      <img src={image} alt={name} />
      <button onClick={onClick}>back</button>
    </div>
  )
}
