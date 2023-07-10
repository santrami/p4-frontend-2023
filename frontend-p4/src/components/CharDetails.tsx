type CharacterDetails = {
  name: string;
  origin: {
    name: string;
  };
  image: string;
  gender: string;
  species: string;
  status: string;
  onClick: () => void;
};

export default function CharDetails({
  name,
  origin,
  image,
  gender,
  species,
  status,
  onClick,
}: CharacterDetails) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-red-900 p-5 rounded-md">
        <h2>{name}</h2>
        <p>Origin: {origin.name}</p>
        <p>gender:{gender} </p>
        <p>species: {species}</p>
        <p>status: {status}</p>
        <img src={image} alt={name} />
        <button
          className="p-2 bg-slate-600 text-neutral-50 my-4 rounded-md px-5"
          onClick={onClick}
        >
          Back
        </button>
      </div>
    </div>
  );
}
