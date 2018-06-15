

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
  var whatever = [];
  if (line.length < 1){
    return "The line is currently empty.";
  }
  else {
    for (i=0; i < line.length; i++){
      whatever.push((i+1) + ". " + line[i] + ", ");
    }
    whatever = whatever.slice(0, whatever.length-2)
  }
  return "The line is currently: " + whatever;
}
