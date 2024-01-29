import { useState } from "react";
import Button from "./button";
import { Shape, iColor, Viewsize, objfit, objpos, direction, bgColor } from "../../Enum/enum";
import Image from "./image";
interface Props {
    image?: string;
    imagesize?: Viewsize;
    imageshape?: Shape;
    imagedirection?: direction;
    cardshape?: Shape;
    colum?: string;
    signtext?: string;
    signtop?: string;
    colorsign?: bgColor;
    objectfit?: objfit;
    objectpos?: objpos;
    theme?: iColor;
    customimageblock?: string;
    customsign?: string;
    customtopsign?: string
    customcolorsign?: string
    custom?: string;
    customtitle?: string;
    customtext?: string;
    customtext2?: string;
    customtextborder?: string;
    prices?: any;
    link?: string;
    target?: boolean
    title?: string;
    customimage?: string;
    infoClass?: any[];
    infoClass2?: any[];
    functionCard?: (e: any) => void;
    functionFav?: (e: any) => void;
}


const Card: React.FC<Props> = ({ image, imageshape, title, cardshape, infoClass, infoClass2, prices, colum = 4, theme, custom, customtext, customtext2, customtitle, link, target, functionCard, objectfit, objectpos, customimage, customimageblock, customtextborder }) => {
    const priceInt = parseInt(prices);
    const formattedPrice = priceInt.toLocaleString();
    // const cardcolum = Viewsize[colum]
    return (
        <>
            {link ? (
                <div className={`${colum} `}>
                    <a href={link} target={target ? "_blank" : ""}>
                        <div className={`${custom ? `${custom}` : ` ${theme} ${cardshape} `}`}>
                            <div className={`${customimageblock ? `${customimageblock}` : `block`}`}>
                                {image != undefined &&

                                    <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />

                                }
                            </div>
                            <div className={`${customtextborder ? `${customtextborder}` : ``}`}>
                                {title != undefined &&
                                    <div className={`${customtitle ? `${customtitle}` : `pl-5 py-2 home-exhib-font`}`}>
                                        {title}
                                    </div>
                                }
                                {infoClass != undefined &&
                                    infoClass?.map((info: any, i: number) => (
                                        <div key={i} className={`${customtext ? `${customtext}` : `pl-5 py-2`}`} onClick={(e: any) => { functionCard?.(info); }}>
                                            {info}
                                        </div>
                                    ))
                                }
                                {infoClass2 != undefined &&
                                    infoClass2?.map((info: any, i: number) => (
                                        <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                            {info}
                                        </div>
                                    ))
                                }
                                {prices != undefined &&
                                    <div className={`${customtext ? `${customtext}` : `pl-5 py-2`}`}>
                                        {formattedPrice}
                                    </div>
                                }
                            </div>
                        </div>
                    </a>
                </div>
            ) : (
                <div className={`${colum} `}>
                    <div className={`${custom ? `${custom}` : `${theme} ${cardshape} `}`}>
                        <div className={`${customimageblock ? `${customimageblock}` : `block`}`}>
                            {image != undefined &&
                                <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                            }
                        </div>
                        <div className={`${customtextborder ? `${customtextborder}` : ``}`}>
                            {title != undefined &&
                                <div className={`${customtitle ? `${customtitle}` : `pl-5 py-2`}`}>
                                    {title}
                                </div>
                            }
                            {infoClass != undefined &&
                                infoClass?.map((info: any, i: number) => (
                                    <div key={i} className={`${customtext ? `${customtext}` : `pl-5 py-2`}`} onClick={(e: any) => { functionCard?.(info); }}>
                                        {info}
                                    </div>
                                ))
                            }
                            {infoClass2 != undefined &&
                                infoClass2?.map((info: any, i: number) => (
                                    <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                        {info}
                                    </div>
                                ))
                            }
                            {prices != undefined &&
                                <div className={`${customtext ? `${customtext}` : `pl-5 py-2`}`}>
                                    {formattedPrice}
                                </div>}
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}


const SignCard: React.FC<Props> = ({ image, imageshape, signtext, signtop, title, cardshape = Shape.square4, infoClass, infoClass2, prices, colum = 4, theme = bgColor.black, customsign, customtopsign, custom, customtext, customtext2, customtitle, link, target, functionCard, objectfit, objectpos, customimage, customimageblock, colorsign, customtextborder, customcolorsign }) => {
    const [isHovered, setIsHovered] = useState(false);
    const priceInt = parseInt(prices);
    const formattedPrice = priceInt.toLocaleString();
    // const cardcolum = Viewsize[colum]
    return (
        <>
            {link ? (
                <div className={`${colum} `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <a href={link} target={target ? "_blank" : ""}>
                        <div className={`${custom ? `${custom}` : ` ${theme} ${cardshape} `}`}>
                            <div className={`${customimageblock ? `${customimageblock}` : `block relative`}`}>
                                {signtop != undefined &&
                                    <div style={{ backgroundColor: customcolorsign }} className={`${customtopsign ? `${customtopsign}` : `absolute top-2 right-4 p-2 rounded-md text-xs bg-opacity-80 ${colorsign}`}`}>
                                        {signtop}
                                    </div>
                                }
                                {image != undefined &&

                                    <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />

                                }
                                {signtext != undefined &&
                                    <div className={`transition-opacity duration-300 ${isHovered ? "" : "opacity-0"}`}>
                                        <div className={`${customsign ? `${customsign}` : `absolute bottom-0 left-0 w-full text-center ${colorsign} `}`}>
                                            {signtext}
                                        </div>

                                    </div>
                                }
                            </div>
                            <div className={`${customtextborder ? `${customtextborder}` : ``}`}>
                                {title != undefined &&
                                    <div className={`${customtitle ? `${customtitle}` : `pl-5 py-2`}`}>
                                        {title}
                                    </div>
                                }
                                {infoClass != undefined &&
                                    infoClass?.map((info: any, i: number) => (
                                        <div key={i} className={`${customtext ? `${customtext}` : `pl-5 py-2 `}`} onClick={(e: any) => { functionCard?.(info); }}>
                                            {info}
                                        </div>
                                    ))
                                }
                                {infoClass2 != undefined &&
                                    infoClass2?.map((info: any, i: number) => (
                                        <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                            {info}
                                        </div>
                                    ))
                                }
                                {prices != undefined &&
                                    <div className={`${customtext ? `${customtext}` : `pl-5 py-2`}`}>
                                        {formattedPrice}
                                    </div>
                                }
                            </div>
                        </div>
                    </a>
                </div>
            ) : (
                <div className={`${colum} `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className={`${custom ? `${custom}` : `${theme} ${cardshape} `}`}>
                        <div className={`${customimageblock ? `${customimageblock}` : `block relative`}`}>
                            {signtop != undefined &&
                                <div style={{ backgroundColor: customcolorsign }} className={`${customtopsign ? `${customtopsign}` : `absolute top-2 right-4 p-2 rounded-md text-xs bg-opacity-80 ${colorsign}`}`}>
                                    {signtop}
                                </div>
                            }
                            {image != undefined &&
                                <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                            }
                            {signtext != undefined &&
                                <div className={`transition-opacity duration-300 ${isHovered ? "" : "opacity-0"}`}>
                                    <div className={`${customsign ? `${customsign}` : `absolute bottom-0 left-0 w-full text-center ${colorsign} `}`}>
                                        {signtext}
                                    </div>

                                </div>
                            }
                        </div>
                        <div className={`${customtextborder ? `${customtextborder}` : ``}`}>
                            {title != undefined &&
                                <div className={`${customtitle ? `${customtitle}` : `pl-5 py-2 `}`}>
                                    {title}
                                </div>
                            }
                            {infoClass != undefined &&
                                infoClass?.map((info: any, i: number) => (
                                    <div key={i} className={`${customtext ? `${customtext}` : `pl-5 py-2 `}`} onClick={(e: any) => { functionCard?.(info); }}>
                                        {info}
                                    </div>
                                ))
                            }
                            {infoClass2 != undefined &&
                                infoClass2?.map((info: any, i: number) => (
                                    <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                        {info}
                                    </div>
                                ))
                            }
                            {prices != undefined &&
                                <div className={`${customtext ? `${customtext}` : `pl-5 py-2 `}`}>
                                    {formattedPrice}
                                </div>}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}




const CustomCard: React.FC<Props> = ({ link, colum = 1, target, title, image, imagesize = 1, infoClass, infoClass2, imageshape, objectfit, objectpos, customtext, customtext2, custom, customtitle, theme = bgColor.black, cardshape = Shape.square4, imagedirection, prices, functionCard, customimage }) => {
    const priceInt = parseInt(prices);
    const formattedPrice = priceInt.toLocaleString();
    // const cardcolum = Viewsize[colum]
    const sizeimage = Viewsize[imagesize]
    return (
        <>
            {link ? (
                <div className={`${colum} `}>
                    <a href={link} target={target ? "_blank" : ""}>
                        <div className={`${custom ? `${custom}` : ` ${theme} ${cardshape} `}`}>
                            {imagedirection != undefined && imagedirection != direction.top && imagedirection != direction.bottom && (
                                <div className="w-full flex">
                                    {imagedirection == direction.left &&
                                        <div className="w-1/2">
                                            {image != undefined &&
                                                <div className={`${sizeimage} mx-auto`}>
                                                    <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                                                </div>
                                            }
                                        </div>
                                    }
                                    <div className="w-1/2">
                                        {title != undefined &&
                                            <div className={`${customtitle}`}>
                                                {title}
                                            </div>
                                        }
                                        {infoClass != undefined &&
                                            infoClass?.map((info: any, i: number) => (
                                                <div key={i} className={`${customtext}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                    {info}
                                                </div>
                                            ))
                                        }
                                        {infoClass2 != undefined &&
                                            infoClass2?.map((info: any, i: number) => (
                                                <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                    {info}
                                                </div>
                                            ))
                                        }
                                        {/* {
                                 Object.values(infoClass).map((o: any, i: any) => (
                                     <div className={`${customtext ? `${customtext}` : `pl-5 py-2 ${infocolor}`}`}>
                                         <p onClick={(e: any) => { function1?.(e); }}>{o}</p>
                                     </div>
                                 ))
                             } */}
                                        {prices != undefined &&
                                            <div className={`${customtext}`}>
                                                {formattedPrice}
                                            </div>
                                        }
                                    </div>
                                    {imagedirection == direction.right &&
                                        <div className="w-1/2">
                                            {image != undefined &&
                                                <div className={`${sizeimage} mx-auto`}>
                                                    <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            )}

                            {imagedirection != undefined && imagedirection != direction.left && imagedirection != direction.right && (
                                <div className="w-full">
                                    {imagedirection == direction.top &&
                                        <div>
                                            {image != undefined &&
                                                <div className={`${sizeimage} mx-auto`}>
                                                    <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                                                </div>
                                            }
                                        </div>
                                    }
                                    <div>
                                        {title != undefined &&
                                            <div className={`${customtitle}`}>
                                                {title}
                                            </div>
                                        }
                                        {infoClass != undefined &&
                                            infoClass?.map((info: any, i: number) => (
                                                <div key={i} className={`${customtext}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                    {info}
                                                </div>
                                            ))
                                        }
                                        {infoClass2 != undefined &&
                                            infoClass2?.map((info: any, i: number) => (
                                                <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                    {info}
                                                </div>
                                            ))
                                        }
                                        {/* {
                                 Object.values(infoClass).map((o: any, i: any) => (
                                     <div className={`${customtext ? `${customtext}` : `pl-5 py-2 ${infocolor}`}`}>
                                         <p onClick={(e: any) => { function1?.(e); }}>{o}</p>
                                     </div>
                                 ))
                             } */}
                                        {prices != undefined &&
                                            <div className={`${customtext}`}>
                                                {formattedPrice}
                                            </div>
                                        }
                                    </div>
                                    {imagedirection == direction.bottom &&
                                        <div>
                                            {image != undefined &&
                                                <div className={`${sizeimage} mx-auto`}>
                                                    <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            )}
                            {imagedirection === undefined &&
                                <div className="w-full">
                                    {title != undefined &&
                                        <div className={`${customtitle}`}>
                                            {title}
                                        </div>
                                    }
                                    {infoClass != undefined &&
                                        infoClass?.map((info: any, i: number) => (
                                            <div key={i} className={`${customtext}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                {info}
                                            </div>
                                        ))
                                    }
                                    {infoClass2 != undefined &&
                                        infoClass2?.map((info: any, i: number) => (
                                            <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                {info}
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </a>
                </div>
            ) : (
                <div className={`${colum} `}>
                    <div className={`${custom ? `${custom}` : ` ${theme} ${cardshape} `}`}>
                        {imagedirection != undefined && imagedirection != direction.top && imagedirection != direction.bottom && (
                            <div className="w-full flex">
                                {imagedirection == direction.left &&
                                    <div className="w-1/2">
                                        {image != undefined &&
                                            <div className={`${sizeimage} mx-auto`}>
                                                <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                                            </div>
                                        }
                                    </div>
                                }
                                <div className="w-1/2">
                                    {title != undefined &&
                                        <div className={`${customtitle}`}>
                                            {title}
                                        </div>
                                    }
                                    {infoClass != undefined &&
                                        infoClass?.map((info: any, i: number) => (
                                            <div key={i} className={`${customtext}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                {info}
                                            </div>
                                        ))
                                    }
                                    {infoClass2 != undefined &&
                                        infoClass2?.map((info: any, i: number) => (
                                            <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                {info}
                                            </div>
                                        ))
                                    }
                                    {/* {
                                 Object.values(infoClass).map((o: any, i: any) => (
                                     <div className={`${customtext ? `${customtext}` : `pl-5 py-2 ${infocolor}`}`}>
                                         <p onClick={(e: any) => { function1?.(e); }}>{o}</p>
                                     </div>
                                 ))
                             } */}
                                    {prices != undefined &&
                                        <div className={`${customtext}`}>
                                            {formattedPrice}
                                        </div>
                                    }
                                </div>
                                {imagedirection == direction.right &&
                                    <div className="w-1/2">
                                        {image != undefined &&
                                            <div className={`${sizeimage} mx-auto`}>
                                                <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        )}

                        {imagedirection != undefined && imagedirection != direction.left && imagedirection != direction.right && (
                            <div className="w-full">
                                {imagedirection == direction.top &&
                                    <div>
                                        {image != undefined &&
                                            <div className={`${sizeimage} mx-auto`}>
                                                <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                                            </div>
                                        }
                                    </div>
                                }
                                <div>
                                    {title != undefined &&
                                        <div className={`${customtitle}`}>
                                            {title}
                                        </div>
                                    }
                                    {infoClass != undefined &&
                                        infoClass?.map((info: any, i: number) => (
                                            <div key={i} className={`${customtext}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                {info}
                                            </div>
                                        ))
                                    }
                                    {infoClass2 != undefined &&
                                        infoClass2?.map((info: any, i: number) => (
                                            <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                                {info}
                                            </div>
                                        ))
                                    }
                                    {/* {
                                 Object.values(infoClass).map((o: any, i: any) => (
                                     <div className={`${customtext ? `${customtext}` : `pl-5 py-2 ${infocolor}`}`}>
                                         <p onClick={(e: any) => { function1?.(e); }}>{o}</p>
                                     </div>
                                 ))
                             } */}
                                    {prices != undefined &&
                                        <div className={`${customtext}`}>
                                            {formattedPrice}
                                        </div>
                                    }
                                </div>
                                {imagedirection == direction.bottom &&
                                    <div>
                                        {image != undefined &&
                                            <div className={`${sizeimage} mx-auto`}>
                                                <Image image={image} title={title} shape={imageshape} objectfit={objectfit} objectpos={objectpos} customimage={customimage} />
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        )}
                        {imagedirection === undefined &&
                            <div className="w-full">
                                {title != undefined &&
                                    <div className={`${customtitle}`}>
                                        {title}
                                    </div>
                                }
                                {infoClass != undefined &&
                                    infoClass?.map((info: any, i: number) => (
                                        <div key={i} className={`${customtext}`} onClick={(e: any) => { functionCard?.(info); }}>
                                            {info}
                                        </div>
                                    ))
                                }
                                {infoClass2 != undefined &&
                                    infoClass2?.map((info: any, i: number) => (
                                        <div key={i} className={`${customtext2}`} onClick={(e: any) => { functionCard?.(info); }}>
                                            {info}
                                        </div>
                                    ))
                                }

                            </div>
                        }
                    </div>
                </div>
            )}
        </>
    )
}

export { Card, SignCard, CustomCard };
