import { useState } from "react";

export default function Inputs({ onSuccess }) {
  const [info, setInfo] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [error, setError] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setError({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });

    let isError = false;

    if (info.name.trim() === "") {
      setError((prev) => ({ ...prev, name: "Can't be blank" }));
      isError = true;
    }

    if (info.number.trim() === "") {
      setError((prev) => ({ ...prev, number: "Can't be blank" }));
      isError = true;
    } else if (!/^\d+$/.test(info.number)) {
      setError((prev) => ({ ...prev, number: "Wrong format, numbers only" }));
      isError = true;
    }

    if (info.month.trim() === "") {
      setError((prev) => ({ ...prev, month: "Can't be blank" }));
      isError = true;
    }

    if (info.year.trim() === "") {
      setError((prev) => ({ ...prev, year: "Can't be blank" }));
      isError = true;
    }

    if (info.cvc.trim() === "") {
      setError((prev) => ({ ...prev, cvc: "Can't be blank" }));
      isError = true;
    }

    if (!isError && onSuccess) {
      onSuccess();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });

    let outlineColor = "#ff5050";

    if (name === "name" && value.trim().length > 0) {
      outlineColor = "#610595";
    }

    if (name === "number") {
      if (/^(?:\d\s?){16}$/.test(value.replace(/\s/g, ""))) {
        outlineColor = "#610595";
      }
    }

    if ((name === "month" || name === "year") && value >= 1 && value <= 31) {
      outlineColor = "#610595";
    }

    if (name === "cvc" && value.length === 3) {
      outlineColor = "#610595";
    }

    e.target.style.outlineColor = outlineColor;

    setError({
      ...error,
      [name]: "",
    });
  };

  return (
    <div className="px-[24px] py-[91px] desktop:px-[0px] desktop:py-[275px] desktop:ml-[349px]">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="for-name w-full">
          <h3 className="text-xs font-medium text-[#21092f] tracking-[2px]">
            CARDHOLDER NAME
          </h3>
          <label htmlFor="name" className="w-full">
            <input
              id="name"
              name="name"
              value={info.name}
              type="text"
              placeholder="e.g. Jane Appleseed"
              className="mt-[9px] w-[327px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px] desktop:w-[381px]"
              onChange={handleChange}
            />
            <p
              className={`text-[#ff5050] text-[12px] font-medium text-sm mt-[8px]  ${
                error.name ? "" : "hidden"
              }`}
            >
              {error.name}
            </p>
          </label>
        </div>
        <div className="w-full mt-[20px]">
          <h3 className="text-xs font-medium text-[#21092f] tracking-[2px]">
            CARD NUMBER
          </h3>
          <label htmlFor="card-number" className="w-full">
            <input
              id="card-number"
              name="number"
              value={info.number}
              onChange={handleChange}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className="mt-[9px] w-[327px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px] desktop:w-[381px]"
            />
            <p
              className={`text-[#ff5050] text-[12px] font-medium text-sm mt-[8px]  ${
                error.number ? "" : "hidden"
              }`}
            >
              {error.number}
            </p>
          </label>
        </div>
        <div className="flex w-full">
          <div className="w-full mt-[20px]">
            <h3 className="text-xs font-medium text-[#21092f] tracking-[2px]">
              EXP. DATE (MM/YY)
            </h3>
            <div className="flex gap-[10px]">
              <input
                id="exp-month"
                name="month"
                value={info.month}
                className="w-[72px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px] mt-[9px] desktop:w-[80px]"
                type="number"
                onChange={handleChange}
                placeholder="MM"
              />
              <input
                id="exp-year"
                name="year"
                value={info.year}
                className="w-[72px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px] mt-[9px] desktop:w-[80px]"
                type="number"
                onChange={handleChange}
                placeholder="YY"
              />
            </div>
            <a
              className={`text-[#ff5050] text-[12px] font-medium text-sm mt-[8px]  ${
                error.month ? "" : "hidden"
              }`}
            >
              {error.month}
            </a>
            <a
              className={`text-[#ff5050] text-[12px] font-medium text-sm mt-[8px] ml-[3px] ${
                error.year ? "" : "hidden"
              }`}
            >
              {error.year}
            </a>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-xs font-medium text-[#21092f] tracking-[2px]">
              CVC
            </h3>
            <input
              id="cvc"
              name="cvc"
              value={info.cvc}
              onChange={handleChange}
              type="number"
              placeholder="e.g. 123"
              className="mt-[9px] w-[164px] h-[45px] border border-[#dfdee0] rounded-[8px] bg-white text-base text-[#21092f] px-[12px] desktop:w-[191px] desktop:ml-[20px]"
            />
            <p
              className={`text-[#ff5050] text-[12px] font-medium text-sm mt-[4px] ml-[20px] ${
                error.cvc ? "" : "hidden"
              }`}
            >
              {error.cvc}
            </p>
          </div>
        </div>
        <button
          id="confirm"
          className="mt-[28px] w-[327px] h-[53px] bg-[#21092f] rounded-[8px] text-white text-lg font-medium cursor-pointer desktop:w-[381px] desktop:rounded-[8px] desktop:mt-[40px]"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
