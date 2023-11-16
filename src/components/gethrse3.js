function Gethrse3({ handlePrev, handleNext }) {
  return (
    <div className="mx-auto xl:px-20 lg:px-6">
      <div className="gethrse3">
        <h1 className="gethrse_title ">Payment details Confirmation</h1>
        <div className="relative mx-auto   mt-10 rounded-[5px]  bg-gradient-to-r from-vermilion to-blue_2 p-[1px]">
          <div className="h-full w-full rounded-[5px] bg-gray_2 px-5 py-2 text-40 font-inter-medium text-white">
            <span className="text-[56px]">113</span> $HRSE
          </div>
        </div>
        <div className="my-4 h-14 border-l-2 border-white"></div>
        <h6 className="text-twhite text-18 font-int-regular">Payment amount</h6>
        <h4 className="text-[46px] text-white">$324.00</h4>
        <button
          onClick={handleNext}
          className="my-16 text-white text-25 bg-blue_1 rounded-[14px] w-2/5 py-[25px] font-clash-semi"
        >
          Confirm
        </button>
        <button
          onClick={handlePrev}
          className="underline text-blue_2 text-24 font-clash-semi"
        >
          Back to edit
        </button>
      </div>
    </div>
  );
}
export default Gethrse3;
