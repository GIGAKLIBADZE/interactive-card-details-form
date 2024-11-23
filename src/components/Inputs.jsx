export default function Inputs() {
  return (
    <>
      <div className="px-[24px] py-[91px]">
        <form className="flex flex-col items-center">
          <div className="for-name w-full">
            <h3 className="text-xs font-medium text-[#21092f] tracking-[2px]">
              CARDHOLDER NAME
            </h3>
            <label htmlFor="name" className="w-full">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Jane Appleseed"
                className="mt-[9px] w-[327px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px]"
                required
              />
            </label>
            <p
              id="name-blank-error"
              className="text-sm text-red-500 mt-[8px] hidden"
            >
              Can’t be blank
            </p>
          </div>
          <div className=" w-full mt-[20px]">
            <h3 className="text-xs font-medium text-[#21092f] tracking-[2px]">
              CARD NUMBER
            </h3>
            <label htmlFor="card-number" className="w-full">
              <input
                id="card-number"
                name="card-number"
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
                className="mt-[9px] w-[327px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px]"
                required
              />
            </label>
            <p
              id="card-number-blank-error"
              className="text-sm text-red-500 mt-[8px] hidden"
            >
              Can’t be blank
            </p>
            <p
              id="card-number-error"
              className="text-sm text-red-500 mt-[8px] hidden"
            >
              Wrong format, numbers only
            </p>
          </div>
          <div className="flex w-full">
            <div className=" w-full mt-[20px]">
              <h3 className="text-xs font-medium text-[#21092f] tracking-[2px]">
                EXP. DATE (MM/YY)
              </h3>
              <div className="flex gap-[10px]">
                <input
                  id="exp-date"
                  name="exp-date"
                  className="w-[72px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px] mt-[9px]"
                  type="number"
                  placeholder="MM"
                  required
                />
                <input
                  id="exp-date"
                  name="exp-date"
                  className="w-[72px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px] mt-[9px]"
                  type="number"
                  placeholder="YY"
                  required
                />
              </div>
              <p
                id="date-blank-error"
                className="text-sm text-red-500 mt-[8px] hidden"
              >
                Can’t be blank
              </p>
            </div>
            <div className=" mt-[20px]">
              <h3 className="text-xs font-medium text-[#21092f] tracking-[2px]">
                CVC
              </h3>
              <input
                id="cvc"
                name="cvc"
                type="number"
                placeholder="e.g. 123"
                className="mt-[9px] w-[164px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px]"
                required
              />
              <p
                id="cvc-blank-error"
                className="text-sm text-red-500 mt-[8px] hidden"
              >
                Can’t be blank
              </p>
            </div>
          </div>
          <button
            id="confirm"
            className="mt-[28px] w-[327px] h-[53px] bg-[#21092f] rounded-[8px] text-white text-lg font-medium cursor-pointer"
          >
            <p>Confirm</p>
          </button>
        </form>
      </div>
    </>
  );
}
