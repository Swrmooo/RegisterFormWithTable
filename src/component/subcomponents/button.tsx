import { iColor, Shape, bType, pos } from "../../Enum/enum";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface Props {
  type?: bType;
  color?: iColor;
  text?: string;
  shape?: Shape;
  width?: string;
  function1?: (e: any) => void;
  link?: string;
  target?: boolean
  custom?: string;
  customic?: string;
  icons?: any;
  pos?: string;
}

const Button: React.FC<Props> = ({
  type,
  color = iColor.primary,
  text,
  shape,
  width,
  link,
  target,
  custom,
  function1,
  icons,
  customic,
  pos
}) => {
  return (

    <>
      {link ? (
        <div style={{ width: width }}>
          <a href={link} target={target ? "_blank" : ""}>
            <button
              type={type}
              onClick={(e: any) => {
                function1?.(e);
              }}
              className={`${custom ? `${custom} ${shape}` : ` border-2 p-2  w-full ${shape} ${color} ${pos}`}`}
            >
              {icons ? <FontAwesomeIcon icon={icons} className={customic} /> : text}
            </button>
          </a>
        </div>
      ) : (
        <div style={{ width: width }}>
          <button
            type={type}
            onClick={(e: any) => {
              function1?.(e);
            }}
            className={`${custom ? `${custom} ${shape}` : ` border-2 p-2  w-full  ${shape} ${color} ${pos}`}`}
          >
            {icons ? <FontAwesomeIcon icon={icons} className={customic} /> : text}
          </button>
        </div>
      )}
    </>

  );
};

export default Button;

