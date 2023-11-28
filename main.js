function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}

var id = generateID();
var participant = [];

function addParticipant() {
  var participantName = $("#participantName").val();
  var participantAge = $("#participantAge").val();
  var participantMail = $("#participantMail").val();
  participant.push({
    id: id(),
    participantName: participantName,
    participantAge: participantAge,
    participantMail: participantMail,
  });
}


const button = document.getElementById("addbutton")
function addi () {
  addParticipant()
}

function displayParticipants() {
  var displayString = '';
  for (var ele of participant) {
    displayString += `${ele.participantName} ${ele.participantAge} ${ele.participantMail}<br>`;
  }
  $("#participantList").html(displayString);
}

console.log(participant);