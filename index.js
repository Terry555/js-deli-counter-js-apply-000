var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length +
  " in line."
}

function nowServing(line, name){
  line.shift();
  if (line.length < 1){
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + name + ".";
  }
}
