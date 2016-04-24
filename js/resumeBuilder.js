var bio = {
	"name" : "Loh Jian Hui",
	"role" : "Front End Web Developer",
	"contacts" : {
		"mobile" : "+65 97974063",
		"email" : "Lthben(at)gmail.com",
		"github" : "lthben",
		"twitter" : "lohjianhui",
		"location" : "Singapore"
	},
	"welcomeMessage" : "Hi there! I'm an aspiring front end web developer.",
	"skills" : ["HTML", "CSS", "Javascript"],
	"biopic" : "images/profile_pic.jpg",

	"display" : function() {

		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);

		var formattedTitle = HTMLheaderName.replace("%data%", this.name); //to make sure the #header element is displayed
		$("#header").prepend(formattedTitle);

		var formattedEmailContact = HTMLemail.replace("%data%", this.contacts.email);
		$("ul#topContacts").append(formattedEmailContact);
		$("ul#footerContacts").append(formattedEmailContact);

		var formattedMobileContact = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("ul#topContacts").append(formattedMobileContact);
		$("ul#footerContacts").append(formattedMobileContact);

		var formattedGithubContact = HTMLgithub.replace("%data%", this.contacts.github);
		$("ul#topContacts").append(formattedGithubContact);
		$("ul#footerContacts").append(formattedGithubContact);

		var formattedTwitterContact = HTMLtwitter.replace("%data%", this.contacts.twitter);
		$("ul#topContacts").append(formattedTwitterContact);
		$("ul#footerContacts").append(formattedTwitterContact);

		var formattedLocationContact = HTMLlocation.replace("%data%", this.contacts.location);
		$("ul#topContacts").append(formattedLocationContact);
		$("ul#footerContacts").append(formattedLocationContact);

		var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append(formattedBioPic);

		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcomeMessage);

		if (bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);

			for (var skill=0; skill<bio.skills.length; skill++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("ul#skills").append(formattedSkill);
			};
		}
	}
}

var work = {

 	"jobs" : [
		{
			"employer" : "employer 1",
			"title" : "job title 1",
			"location" : "Tampines, Singapore",
			"dates" : "2016",
			"description" : "job description 1"

		},
		{
			"employer" : "employer 2",
			"title" : "job title 2",
			"location" : "Tuas, Singapore",
			"dates" : "2016",
			"description" : "job description 2"
		}
	],

	"display" : function () {

		for (var job = 0; job < work.jobs.length; job++) {

			$("#workExperience").append(HTMLworkStart);

			var employer = work.jobs[job].employer;
			var title = work.jobs[job].title;
			var place = work.jobs[job].location;
			var dates = work.jobs[job].dates;
			var description = work.jobs[job].description;

			var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", title);
			var formattedPlace = HTMLworkLocation.replace("%data%", place);
			var formattedDates = HTMLworkDates.replace("%data%", dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", description);

			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedPlace);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		};
	}
}

var projects = {

	"projects" :
	[
		{
			"title" : "project title 1",
			"dates" : "dates worked 1",
			"description" : "project description 1",
			"images" : [
							"images/fry.jpg",
							"images/fry.jpg"
						]

		},
		{
			"title" : "project title 2",
			"dates" : "dates worked 2",
			"description" : "project description 2",
			"images" : [
							"images/fry.jpg",
							"images/fry.jpg"
						]
		}
	],

	"display" : function() {

		for (var project=0; project<this.projects.length; project++) {

			$("#projects").append(HTMLprojectStart);

			var title = this.projects[project].title;
			var dates = this.projects[project].dates;
			var desc = this.projects[project].description;
			var images = this.projects[project].images;

			var formattedTitle = HTMLprojectTitle.replace("%data%", title);
			var formattedDates = HTMLprojectDates.replace("%data%", dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", desc);


			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);

			for (image in images) {
				var formattedImage = HTMLprojectImage.replace("%data%", images[image]);
				$(".project-entry:last").append(formattedImage);
			};
		}
	}
}

var education = {
	"schools" :
	[
		{
			"name" : "school 1 name",
			"location" : "Woodlands, Singapore",
			"degree" : "school 1 degree",
			"majors" : [ "1major1", "1major2" ],
			"dates" : "2016",
			"url" : "school 1 url"
		}, {
			"name" : "school 2 name",
			"location" : "Toa Payoh, Singapore",
			"degree" : "school 2 degree",
			"majors" : [ "2major1", "2major2" ],
			"dates" : "2016",
			"url" : "school 2 url"
		}
	],
	"onlineCourses" :
	[
		{
			"title" : "course 1 name",
			"school" : "online school 1 name",
			"dates" : "2016",
			"url" : "course 1 url"
		}, {
			"title" : "course 2 name",
			"school" : "online school 2 name",
			"dates" : "2016",
			"url" : "course 2 url"
		}
	],

	"display" : function() {

		for (var school=0; school<education.schools.length; school++) {

			$("#education").append(HTMLschoolStart);

			var schoolName = education.schools[school].name;
			var schoolDegree = education.schools[school].degree;
			var schoolDates = education.schools[school].dates;
			var schoolLocation = education.schools[school].location;

			formattedSchoolName = HTMLschoolName.replace("%data%", schoolName);
			formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schoolDegree);
			formattedSchoolDates = HTMLschoolDates.replace("%data%", schoolDates);
			formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schoolLocation);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);

			for (var major=0; major<education.schools[school].majors.length; major++) {
				var schoolMajor = education.schools[school].majors[major];
				formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolMajor);
				$(".education-entry:last").append(formattedSchoolMajor);
			};
		};

		$(".education-entry:last").append(HTMLonlineClasses);

		for (var onlineCourse=0; onlineCourse<education.onlineCourses.length; onlineCourse++) {

			var onlineTitle = education.onlineCourses[onlineCourse].title;
			var onlineSchool = education.onlineCourses[onlineCourse].school;
			var onlineDates = education.onlineCourses[onlineCourse].dates;
			var onlineURL = education.onlineCourses[onlineCourse].url;

			formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineTitle);
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineSchool);
			formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineTitle);
			formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineURL);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		};
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

// var countries = {'country1':'','country2':'China','country3':'England'};

// for (country in countries) {
// 	console.log(countries[country]);
// }

/*
myObj = {'country1':'Germany', 'country2':'Argentina'};
for (key in myObj){
    if (myObj.hasOwnProperty(key)) {
        console.log(myObj[key]);
    }
}

$("#main").append(internationalizeButton);

function inName(the_name) {

	var stringArray = the_name.split(" ");

	return (stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1).toLowerCase() + " " + stringArray[1].toUpperCase());

}

 $("#main").append("Loh Jian Hui");

 var awesomeThoughts = "I am Loh Jian Hui and I am AWESOME!";

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

 // $"#main").append(funThoughts);

 var name = "Loh Jian Hui";

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : name,
	"role" : role,
	"contact info" : {
		"email": "Lthben(at)gmail.com",
		"twitter": "lohjianhui",
		"github": "lthben",
		"location": "Singapore"
	},
	"picture URL" : "/images/fry.jpg",
	"welcome message" : "Hi there",
	"skills" : ["HTML", "CSS", "Javascript"]
}

$("#header").append(bio.name);

var work = {};

work.position = "Front End Web Developer";
work.employer = "Udacity";
work.years = "2 months";
work.city = "Singapore";

var education = {};

education["name"] = "Udacity";
education["years"] = "2 months";
education["city"] = "Singapore";


$("#header").append(work["position"]);
$("#header").append(education.name);

console.log(work["position"]);
console.log(education.name);

var education = {
	"schools" : ["school1", "school2"],
	"cities" : ["city1", "city2"],
	"majors" : ["major1","major2"],
	"minors" : ["minor1","minor2"],
	"graduated_years" : ["2001","2002"],
	"course_info" : ["course1","course2"]
}

*/

