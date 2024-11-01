function skillsMember() {
    var member = {
        name: 'John',
        age: 35,
        skills: ['HTML', 'CSS', 'JS'],
        display: function() {
            console.log(this.name + ' is ' + this.age + ' years old.');
        }
    };
    return member;
}