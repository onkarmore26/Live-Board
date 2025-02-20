// import { Canvas } from "./_components/canvas";
// import { Room } from "@/components/room";
// import { Loading } from "./_components/loading";

// interface BoardIdPageProps {
//   params: {
//     boardId: string;
//   };
// }

// const BoardIdPage = ({ params }: BoardIdPageProps) => {
//   return (
//     <Room roomId={params.boardId} fallback={<Loading />}>
//       <Canvas boardId={params.boardId} />
//     </Room>
//   );
// };

// export default BoardIdPage;

import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId?: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const boardId = params.boardId;

  if (!boardId) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        ⚠️ Invalid or missing Board ID.
      </div>
    );
  }

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;
