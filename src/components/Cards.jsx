export default function Cards() {
  return (
    <>
      <div className="bg-[url('/bg-main-mobile.png')] w-[100vw] relative pt-[32px] pb-[51px] bg-cover desktop:bg-[url('/bg-main-desktop.png')] desktop:w-[483px] desktop:block desktop:bg-cover desktop:min-h-[100vh]">
        <p className="text-[9px] font-medium text-[#fff] tracking-[1.29px] absolute z-[1] ml-[305px] mt-[70px] desktop:text-[14px] desktop:mt-[577px] desktop:ml-[625px]">
          000
        </p>
        <img
          src="./card-logo.svg"
          className="absolute z-[1] mt-[105px] ml-[35px] desktop:mt-[200px] desktop:ml-[194px]"
        />
        <p className="absolute z-[1] text-[18px] font-medium text-[#ffffff] tracking-[2.2px] mt-[182px] ml-[35px] desktop:text-[28px] desktop:tracking-[3.42px] desktop:ml-[193px] desktop:mt-[320px] desktop:w-[100%]">
          0000 0000 0000 0000
        </p>
        <p className="absolute z-[1] text-[9px] font-medium text-[#ffffff] tracking-[1.29px] mt-[215px] ml-[35px] desktop:text-[14px] desktop:tracking-[2px] desktop:ml-[194px] desktop:mt-[375px]">
          JANE APPLESEED
        </p>
        <p className="absolute z-[1] text-[9px] font-medium text-[#ffffff] tracking-[1.29px] mt-[215px] ml-[250px] desktop:text-[14px] desktop:tracking-[2px] desktop:ml-[514px] desktop:mt-[375px]">
          00/00
        </p>
        <img
          src="./bg-card-back.png"
          className="w-[286px] block relative ml-[73px] desktop:w-[447px] desktop:h-[245px] desktop:ml-[258px] desktop:mt-[469px]"
        />
        <img
          src="./bg-card-front.png"
          className="w-[285px] absolute ml-[17px] mt-[-68px] desktop:w-[447px] desktop:h-[245px] desktop:ml-[164px] desktop:mt-[-530px]"
        />
      </div>
    </>
  );
}
