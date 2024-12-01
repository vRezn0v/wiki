import CommunityLinks from "./components/mkin/CommunityLinks";
import ComingSoon from "./components/mkin/ComingSoon";

function App() {
  return (
    <div className="dark">
      <div className="flex-col justify-center p-10 w-full">
        <ComingSoon />
        <div className="flex justify-center [&>*]:p-1 [&>*]:m-2 [&>*]:w-1/3">
          <CommunityLinks/>
        </div>
      </div>
    </div>
  );
}

export default App;
