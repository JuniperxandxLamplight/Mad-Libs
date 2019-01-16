$(function () {
  $("#formOne").submit(function(event){
    var person1Input = $("#person1").val();
    var person2Input = $("#person2").val();
    var animalInput = $("#animal").val();
    var exclamationInput = $("#exclamation").val();
    var nounInput = $("#noun").val();
    var verbInput = $("#verb").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".noun").text(nounInput);
    $(".verb").text(verbInput);

    $("#story").show();
    event.preventDefault();
  });
});
