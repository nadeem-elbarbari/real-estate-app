import spinner from "../assets/spinner.svg"

const Spinner = () => {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <figure>
        <img src={spinner} alt="Loader" className="h-24"/>
      </figure>
    </div>
  )
}

export default Spinner