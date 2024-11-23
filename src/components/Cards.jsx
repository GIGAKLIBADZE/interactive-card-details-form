export default function Cards() {
  return (
    <>
      <div className="bg-[url('/bg-main-mobile.png')] bg-no-repeat relative pt-[32px] pb-[51px] bg-cover">
        <p className="text-[9px] font-medium text-[#fff] tracking-[1.29px] absolute z-[1] ml-[305px] mt-[70px]">
          000
        </p>
        <img
          src="./card-logo.svg"
          className="absolute z-[1] mt-[105px] ml-[35px]"
        />
        <p className="absolute z-[1] text-[18px] font-medium text-[#ffffff] tracking-[2.2px] mt-[182px] ml-[35px]">
          0000 0000 0000 0000
        </p>
        <p className="absolute z-[1] text-[9px] font-medium text-[#ffffff] tracking-[1.29px] mt-[215px] ml-[35px]">
          JANE APPLESEED
        </p>
        <p className="absolute z-[1] text-[9px] font-medium text-[#ffffff] tracking-[1.29px] mt-[215px] ml-[250px]">
          00/00
        </p>
        <img
          src="./bg-card-back.png"
          className="w-[286px] block relative ml-[73px] "
        />
        <img
          src="./bg-card-front.png"
          className="w-[285px] absolute ml-[17px] mt-[-68px]"
        />
      </div>
    </>
  );
}
