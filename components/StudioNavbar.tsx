import Link from "next/link";
import { ArrowUturnUpIcon } from "@heroicons/react/24/solid";
import { dColors } from "../theme";

// {`text-[${dColors["--kamil-brand"]}]`}

function StudioNavbar(props: any) {
  console.log(`text-[${dColors["--kamil-brand"]}]`);
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className={`text-[#F7AB0A] flex items-center`}>
          <ArrowUturnUpIcon
            className={`text-[${dColors["--kamil-brand"]}] mr-2 h-6 w-6`}
          />
          Go to website
        </Link>
      </div>
      {/* */}
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
