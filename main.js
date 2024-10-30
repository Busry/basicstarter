let names = "busAri";

function capitalized(name){
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
names = capitalized(names)
console.log(names)
