import empty from "../assets/empty.png";

function Empty() {
  return (
    <div className="flex justify-center items-center w-fll h-full">
      <img src={empty} alt="Error" className="object-cover" />
    </div>
  );
}

export default Empty;
