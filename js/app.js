var story = document.getElementById("description");
var title = document.getElementById("title");

//harvey hover
$('#harv').mouseover(function () {
    title.textContent = "Harvey's"
    story.textContent = "Harvey's tailory website built using HTML5/CSS3, jQuery, javascript and foundation zurb framework. A blend of black brown and shades of the color were used to amplify the brand's bespoke signature color";
});
$('#harv').mouseout(function () {
    title.textContent = ""
    story.textContent = "";
});
//elite hover
$('#elite').mouseover(function () {
    title.textContent = "Elite Designs";
    story.textContent = "A one page website to market a German interior design agency. Built using modernizr javascript framework, foundation web framework and jquery.";
});
$('#elite').mouseout(function () {
    title.textContent = "";
    story.textContent = "";
});
//raid hover
$('#raid').mouseover(function () {
    title.textContent = "Raid Automotive"
    story.textContent = "A website built for Raid automotive workshop to showcase their catalog of products. The site was built using jQuery and fondation zurb framework for sites";
});
$('#raid').mouseout(function () {
    title.textContent = "";
    story.textContent = "";
});
//alan hover
$('#alan').mouseover(function () {
    title.textContent = "Alan Turing";
    story.textContent = "A card-like presentation on the founding father of computer science. The tools used to build the website ar jQuery and modernizr javascript framework";
});
$('#alan').mouseout(function () {
    title.textContent = "";
    story.textContent = "";
});
//dquest hover
$('#dquest').mouseover(function () {
    title.textContent = "Dragon Quest";
    story.textContent = "A quest game built on the foundation zurb web framework and jQuery. It offers a set of questions and if answered correctly, you proceed to the next level.";
});
$('#dquest').mouseout(function () {
    title.textContent = "";
    story.textContent = "";
});
//calc hover
$('#calc').mouseover(function () {
    title.textContent = "Compound Interest Calculator";
    story.textContent = "A simple compound interest calculator built on the foundation zurb framework together with javascript and jQuery";
});
$('#calc').mouseout(function () {
    title.textContent = "";
    story.textContent = "";
});

//button
$('#msg').focusin(function () {
    $('#subs').animate({
        marginTop: "0"
    }, 2000);
});
$('#msg').focusout(function () {
    $('#subs').animate({
        marginTop: "-60%"
    }, 2000);
});
