//define
//value从0开始
//即 small = 0 medium = 1 large=2
enum size {
  small,
  medium,
  large,
}

//对于value可以自定义化
enum size2 {
  small = 1,
  medium = "string",
  large = "true",
}

enum size3 {
  small = "sm",
  medium = "md",
  large = "lg",
}

//使用enum
const buttonSize: size = size.large;
