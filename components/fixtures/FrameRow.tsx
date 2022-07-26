import Link from "next/link";
import { FC } from "react";
import { FrameModel } from "../../models/frame";

interface FrameRowProps {
  homePlayer: FrameModel;
  awayPlayer: FrameModel;
}

const FrameRow: FC<FrameRowProps> = ({ homePlayer, awayPlayer }) => {
  //  console.log(homePlayer);

  return (
    <>
      <div className='flex align-center mx-auto mb-2 w-4/5'>
        <div className={`w-1/2 text-right mr-4 ${homePlayer.score === 1 && "bg-green-200"}`}>
          {homePlayer.name}
        </div>
        <div>vs</div>
        <div className={`w-1/2 ml-4 ${awayPlayer.score === 1 && "bg-green-200"}`}>
          {awayPlayer.name}
        </div>
      </div>
    </>
  );
};

export default FrameRow;
