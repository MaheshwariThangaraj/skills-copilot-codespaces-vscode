function skillsMember()
{
    var member = {
        name: "John Doe",
        age: 30,
        skills: ["Javascript", "HTML", "CSS"],
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(this.name + " knows " + skill);
            });
        }
    };

    member.showSkills();
}