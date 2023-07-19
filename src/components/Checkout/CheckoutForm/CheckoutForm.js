export default function CheckoutForm() {
  return (
    <div>
      <h2 className="mb-5 text-2xl font-light">Billing Details</h2>
      <form action="" className="text-zinc-400">
        <div className="flex gap-5 mb-5">
          <div className="w-[50%]">
            <label htmlFor="First Name" className="block mb-2">
              First Name*
            </label>
            <input
              type="text"
              className="border w-full py-3 px-5 outline-none "
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="Last Name" className="block mb-2">
              Last Name*
            </label>
            <input
              type="text"
              className="border w-full py-3 px-5 outline-none "
            />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="Company Name" className="block mb-2">
            Company Name (Optional)
          </label>
          <input
            type="text"
            className="border w-full py-3 px-5 outline-none "
          />
        </div>
        <div className="mb-5">
          <label htmlFor="countryName" className="block mb-2">
            Country*
          </label>
          <select
            name="countryName"
            id="countryName"
            className="border w-full py-3 px-5 outline-none"
          >
            <option value="">Bangladesh</option>
            <option value="">Pakistan</option>
            <option value="">USA</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="StreetAddress" className="block mb-2">
            Street Address
          </label>
          <input
            type="text"
            className="border w-full py-3 px-5 outline-none "
          />
        </div>
        <div className="flex gap-5 mb-5">
          <div className="w-[50%]">
            <label htmlFor="townCity" className="block mb-2">
              Town / City*
            </label>
            <input
              type="text"
              className="border w-full py-3 px-5 outline-none "
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="StateCountry" className="block mb-2">
              State / Country*
            </label>
            <input
              type="text"
              className="border w-full py-3 px-5 outline-none "
            />
          </div>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="w-[50%]">
            <label htmlFor="zipcode" className="block mb-2">
              Postcode /ZIP*
            </label>
            <input
              type="text"
              className="border w-full py-3 px-5 outline-none "
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="StateCountry" className="block mb-2">
              Phone Number*
            </label>
            <input
              type="text"
              className="border w-full py-3 px-5 outline-none "
            />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="StreetAddress" className="block mb-2">
            Email Address*
          </label>
          <input
            type="email"
            className="border w-full py-3 px-5 outline-none "
          />
        </div>
        <div>
          <label htmlFor="otherNote" className="bolck mb-2">
            Other Note (Optional)
          </label>
          <textarea
            name="otherNote"
            id="othernote"
            cols="30"
            rows="5"
            className="border w-full py-2 px-5 outline-none resize-none"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
