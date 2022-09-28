import React from "react";
import Section from "./Section";

function Union() {
  const title = "THE UNION";
  const descriptions =
    "YTU Students' Union is the main student body of the university, re-established in 2014 with the aim of bridging between the university administration and the students, and revitalization of a vivid campus life and extra-curricular activities. The Union consists of a number of clubs and associations, actively run by the students ourselves, in the fields of languages, arts, music, sports, science and technology. Since its establishment, YTU Students’ Union has raised a sequence of festive and lively events, fierce competitions every year so as to render rooms for further development of soft skills, technological competency as well as volunteering opportunities for students. Currently, YTU Students’ Union has reached to its Sixth Term of Central Executive Committee, functioning at its utmost to fulfill the main objectives and for the greater good of YTU students.";
  const logo = "/utils/su_logo_large.png";
  const subTitle = "Yangon Technological University Student's Union";
  return (
    <Section
      title={title}
      description={descriptions}
      logo={logo}
      subTitle={subTitle}
    />
  );
}

export default Union;
