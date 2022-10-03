const linkToPage = {
  strikes: "Strikes",
  "recent-news": "News",
  cdm: "CDM",
  idp: "IDP",
  supports: "Supports",
  "spring-libraries": "Libraries",
  "educational-support": "EducationalSupport",
  "donate-food": "FoodDonate",
  "student-associations": "StudentsAssociation",
  clubs: "Club",
  "other-clubs": "OtherClubs",
  "mastery-plan": "MasterPlan",
  autonomy: "Autonomy",
  about: "About",
  contact: "Contact",
};

const keys = Object.keys(linkToPage);
keys.forEach((key) => {
  console.log(key, linkToPage[key]);
});
