enum bgColor {
  black = "bg-black text-white",
  white = "bg-white border-gray-600 text-black",
  green = "bg-green-700 text-black",
  green_w = "bg-green-700 text-white",
  red = "bg-red-800 text-black",
  red_w = "bg-red-800 text-white",
  blue = "bg-blue-800 text-black",
  blue_w = "bg-blue-800 text-white",
}

enum Shape {
  none = "none",
  square1 = "rounded-sm",
  square2 = "rounded",
  square3 = "rounded-md",
  square4 = "rounded-lg",
  square5 = "rounded-xl",
  square6 = "rounded-2xl",
  square7 = "rounded-3xl",
  circle = "rounded-full",
}


enum objpos {
  top = "object-top",
  center = "object-center",
  left = "object-left",
  right = "object-right",
  bottom = "object-bottom",
}

enum objfit {
  cover = "object-cover",
  contain = "object-contain",
  fill = "object-fill",
  none = "object-none",
  scale = "object-scale-down",
}

enum iColor {
  primary = "bg-blue-600 text-white hover:bg-blue-700 hover:transition duration-500",
  danger = "bg-red-800 text-white hover:bg-red-700 hover:transition duration-500",
  success = "bg-green-600 text-white hover:bg-green-700 hover:transition duration-500",
  warning = "bg-yellow-400 text-white hover:bg-yellow-600 hover:transition duration-500",
  info = "bg-indigo-400 text-white hover:bg-indigo-500 hover:transition duration-500",
  dark = "bg-black text-white hover:bg-opacity-70 hover:transition duration-500",
  light = "bg-white text-black  hover:bg-gray-100 hover:transition duration-500",
  ol_primary = "border-2 border-blue-600 bg-white text-blue-600 hover:border-blue-500 hover:text-blue-500 hover:transition duration-500",
  ol_danger = "border-2 border-red-600 bg-white text-red-600 hover:border-red-500 hover:text-red-500 hover:transition duration-500",
  ol_success = "border-2 border-green-600 bg-white text-green-600 hover:border-green-500 hover:text-green-500 hover:transition duration-500",
  ol_warning = "border-2 border-yellow-400 bg-white text-yellow-400 hover:border-yellow-500 hover:text-yellow-500 hover:transition duration-500",
  ol_info = "border-2 border-indigo-500 bg-white text-indigo-500  hover:border-indigo-400 hover:text-indigo-400 hover:transition duration-500",
  ol_dark = "border-2 border-black bg-white text-black hover:border-gray-600 hover:text-gray-600 hover:transition duration-500",

}

enum Viewsize {
  "w-full" = 1,
  "w-1/2" = 2,
  "w-1/3" = 3,
  "w-1/4" = 4,
  "w-1/5" = 5,
  "w-1/6" = 6,
  
}

enum iType {
  text = "text",
  button = "button",
  checkbox = "checkbox",
  file = "file",
  radio = "radio",
  submit = "submit",
  search = "search",
  reset = "reset"
}
enum bType {
  button = "button",
  submit = "submit",
  reset = "reset"
}
enum pos{
  start = "text-start",
  center = "text-center",
  left = "text-left",
  right = "text-right",
  end = "text-end",
  justify = "text-justify",
}

enum direction{
  top = "top",
  left = "left",
  right = "right",
  bottom = "bottom"
}


export { bgColor, Shape, objpos, objfit, iColor, Viewsize, iType, bType, pos, direction };


