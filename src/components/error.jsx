import error from "../assets/error.png";

function Error() {
  return (
    <div className="flex justify-center items-center w-fll h-full">
      <img src={error} alt="Error" className="object-cover" />
    </div>
  );
}

export default Error;
