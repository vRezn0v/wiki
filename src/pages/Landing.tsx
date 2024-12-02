import ComingSoon from "../components/mkin/ComingSoon";
import CommunityLinks from "../components/mkin/CommunityLinks";

export default function Landing() {
  return (
    <div className="flex-col justify-center md:p-10 w-full">
      <ComingSoon />
      <div className="flex [&>*]:p-1 [&>*]:m-2 md:flex-row lg:flex-row md:[&>*]:w-1/3 flex-col">
        <CommunityLinks />
      </div>
    </div>
  );
}
