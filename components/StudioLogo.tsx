import Image from "next/image";
import kamilImg from "../public/kamil_with_coffee.jpeg";

function StudioLogo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        height={50}
        width={50}
        className="rounded-full object-cover"
        alt="studio logo"
        src={kamilImg}
      />
      <>{renderDefault && renderDefault(props)}</>
    </div>
  );
}

export default StudioLogo;
