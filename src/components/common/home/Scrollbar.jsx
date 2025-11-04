export const ScrollFeature = () => {
  const SCROLL_TEXT_CONTENT = (
    <div className="shrink-0 whitespace-nowrap px-4">
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
      <span className="text-white font-bold">LATEST &nbsp;</span> WORK AND
      FEATURED. &nbsp;
    </div>
  );

  return (
    <>
      <div className="card text-gray-500 h-[50px] xl:h-full overflow-x-hidden rounded-full text-sm flex justify-center items-center flex-row w-full">
        <div className="w-[90%] md:w-[93%] overflow-x-hidden">
          <div className="flex scrollerText">{SCROLL_TEXT_CONTENT}</div>
        </div>
      </div>
    </>
  );
};
