import { objpos, objfit, Shape } from "../../Enum/enum";
interface Props {
  image?: string;
  title?: string;
  shape?: Shape;
  pathbg?: string;
  children?: JSX.Element;
  custombgimage?: string;
  objectpos?: objpos;
  objectfit?: objfit;
  customimage?: string;
  display?: string;
}

const Image: React.FC<Props> = ({
  image,
  title = "picture",
  shape,
  pathbg,
  children,
  custombgimage = "bg-auto bg-center w-full h-full",
  objectpos,
  objectfit,
  display,
  customimage,
}) => {
  const bgpic = pathbg ? `bg-[url('/${pathbg}')]` : ``;
  const bgimage = bgpic.toString();
  return (
    <>
      {bgimage ? (
        <div className={`${bgimage} ${custombgimage}`}>{children}</div>
      ) : (
        <img
          src={image}
          alt={title}
          className={`${customimage
              ? `${customimage}`
              : ` w-full 
                  h-full
                         ${objectpos}
                         ${objectfit}
                        ${shape}
                        ${display}
                 `
            }
                     `}
        />
      )}
    </>
  );
};

export default Image;
