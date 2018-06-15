var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length +
  " in line."
}
takeANumber(katzDeliLine, "Ada")

function nowServing(line, name){
line.push(name);
  if (line.length < 2){
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + name + ".";
  }
}
