import React, { useEffect, useState } from "react";
import CardProject from "../components/Fragments/CardProject";
import Container from "../components/Layouts/Container";
import { getDataProjects } from "../utils/dataProjects";
import { RevealOnScroll } from "../components/RevealOnScroll";

const ProjectPage = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(getDataProjects());
  }, []);
  return (
    <>
      <RevealOnScroll>
        <Container>
          <div className="mt-10">
            <h2 className="text-xl font-black font-Grotesk text-green-secondary">Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-3">
            {project.length > 0 &&
              project.map((item) => (
                <CardProject key={item.id}>
                  <CardProject.Header image={item.image} linkUrl={item.linkUrl} />
                  <CardProject.Body title={item.title} desc={item.description} />
                  <CardProject.Footer
                    linkUrl={item.linkUrl}
                    children={Object.values(item.tech).map((item) => (
                      <img src={item} alt={item} key={item} className="w-5 h-5" />
                    ))}
                  />
                </CardProject>
              ))}
          </div>
        </Container>
      </RevealOnScroll>
    </>
  );
};

export default ProjectPage;
