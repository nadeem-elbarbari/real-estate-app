import { useState } from 'react';

function CreatePost() {
  const [formData, setFormData] = useState({
    type: 'sell',
    title: '',
    description: '',
    address: '',
    beds: 1,
    baths: 1,
    regularPrice: 0,
    discountedPrice: 0,
    parking: true,
    furnished: true,
    offer: true,
  });

  const {
    type,
    title,
    beds,
    baths,
    parking,
    furnished,
    address,
    description,
    regularPrice,
    discountedPrice,
    offer,
  } = formData;

  function onChange() {}

  return (
    <main className="mt-6 max-w-md px-2 mx-auto">
      <h1 className="text-3xl font-bold text-center">Create a Post</h1>
      <form>
        <p className="text-lg mt-6 font-bold">Sell or Rent</p>
        <div className="flex justify-between items-center gap-4">
          <button
            type="button"
            id="type"
            value={'sell'}
            className={`w-full rounded px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase ${
              type === 'rent' ? 'bg-white text-black' : 'bg-slate-600 text-white font-bold'
            }`}
          >
            sell
          </button>
          <button
            type="button"
            className={`w-full rounded px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase ${
              type === 'sell' ? 'bg-white text-black' : 'bg-slate-600 text-white font-bold'
            }`}
          >
            rent
          </button>
        </div>
        <label htmlFor="title" className="text-lg mt-6 font-bold block">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={onChange}
          value={title}
          placeholder="Title"
          maxLength={32}
          minLength={10}
          required
          className={`w-full py-2 px-4 text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700`}
        />

        <div className="flex gap-4">
          <div>
            <label htmlFor="beds" className="text-lg font-bold mt-6 block">
              Beds
            </label>
            <input
              type="number"
              name="beds"
              id="beds"
              value={beds}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="w-full py-2 px-4 text-center text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700"
            />
          </div>
          <div>
            <label htmlFor="baths" className="text-lg font-bold mt-6 block">
              Baths
            </label>
            <input
              type="number"
              name="baths"
              id="baths"
              value={baths}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="w-full py-2 px-4 text-center text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700"
            />
          </div>
        </div>
        <div>
          <p className="text-lg mt-6 font-bold">Parking</p>
          <div className="flex justify-between items-center gap-4">
            <button
              type="button"
              id="parking"
              value={true}
              className={`w-full rounded px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase ${
                !parking ? 'bg-white text-black' : 'bg-slate-600 text-white font-bold'
              }`}
            >
              yes
            </button>
            <button
              type="button"
              id="type"
              value={false}
              className={`w-full rounded px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase ${
                parking ? 'bg-white text-black' : 'bg-slate-600 text-white font-bold'
              }`}
            >
              no
            </button>
          </div>
        </div>
        <div>
          <p className="text-lg mt-6 font-bold">Furnished</p>
          <div className="flex justify-between items-center gap-4">
            <button
              type="button"
              id="furnished"
              value={true}
              className={`w-full rounded px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase ${
                !furnished ? 'bg-white text-black' : 'bg-slate-600 text-white font-bold'
              }`}
            >
              yes
            </button>
            <button
              type="button"
              id="furnished"
              value={false}
              className={`w-full rounded px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase ${
                furnished ? 'bg-white text-black' : 'bg-slate-600 text-white font-bold'
              }`}
            >
              no
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="address" className="text-lg mt-6 font-bold block">
            Address
          </label>
          <textarea
            type="text"
            name="address"
            id="address"
            onChange={onChange}
            value={address}
            placeholder="Address"
            required
            className={`w-full py-2 px-4 text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700`}
          />
        </div>
        <div>
          <label htmlFor="description" className="text-lg mt-6 font-bold block">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            onChange={onChange}
            value={description}
            placeholder="Description"
            required
            className={`w-full py-2 px-4 text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700`}
          />
        </div>
        <div>
          <p className="text-lg mt-6 font-bold">Offer</p>
          <div className="flex justify-between items-center gap-4">
            <button
              type="button"
              id="offer"
              value={true}
              className={`w-full rounded px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase ${
                !offer ? 'bg-white text-black' : 'bg-slate-600 text-white font-bold'
              }`}
            >
              yes
            </button>
            <button
              type="button"
              id="offer"
              value={false}
              className={`w-full rounded px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase ${
                offer ? 'bg-white text-black' : 'bg-slate-600 text-white font-bold'
              }`}
            >
              no
            </button>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="regularPrice" className="text-lg font-bold mt-6 block">
              Regular Price ($)
            </label>
            <div className="flex justify-center items-center gap-4">
              <input
                type="number"
                name="regularPrice"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                required
                className="w-full py-2 px-4 text-center text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700"
              />
              {type === 'rent' && <p className="text-md w-[20%] whitespace-nowrap">$ / Month</p>}
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="discountedPrice" className="text-lg font-bold mt-6 block">
            Discounted Price ($)
          </label>

          <div className="flex justify-center items-center gap-4">
            <input
              type="number"
              name="discountedPrice"
              id="discountedPrice"
              value={discountedPrice}
              onChange={onChange}
              required
              className="w-full py-2 px-4 text-center text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700"
            />
            {type === 'rent' && <p className="text-md w-[20%] whitespace-nowrap">$ / Month</p>}
          </div>
        </div>
        <div  className='mb-6'>
          <label htmlFor="images" className="text-lg font-bold mt-6 block">
            Images
          </label>
          <p className="text-gray-600">The first image will be the cover (max 6)</p>
          <input
            type="file"
            name="images"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full py-2 px-4 text-center text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700"
          />
        </div>
        <button type="submit" className="w-full rounded bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-200 ease-in-out uppercase">
          Publish
        </button>
      </form>
    </main>
  );
}

export default CreatePost;
