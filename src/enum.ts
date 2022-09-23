//define
enum size {
  small,
  medium,
  large,
}

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

//use
const buttonSize: size = size.large;
