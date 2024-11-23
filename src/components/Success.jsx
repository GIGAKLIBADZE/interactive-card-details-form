export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center mt-[91px] py-[82px] w-[100vw] pt-[0px]">
      <img
        src="/icon-complete.svg"
        alt="Icon"
        id="success-picture"
        className="w-[80px] h-[80px]"
      />
      <h4 className="text-2xl font-medium text-[#21092f] tracking-[3.42px] mt-[35px]">
        THANK YOU!
      </h4>
      <p className="text-lg font-medium text-[#8f8694] mt-[16px]">
        We’ve added your card details
      </p>
      <button
        id="continue"
        className="mt-[48px] w-[327px] h-[53px] bg-[#21092f] rounded-[8px] flex items-center justify-center cursor-pointer"
      >
        <p className="text-lg font-medium text-white">Continue</p>
      </button>
    </div>
  );
}
