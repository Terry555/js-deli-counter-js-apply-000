var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length +
  " in line."
}

function nowServing(line){
  if (line.length < 1){
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line){
  if (line.length < 1){
    return "There is nobody in line.";
  }
  else {
    return 
  }
}