import axios from "axios";

export default async function getHomeData() {
  try {
    const [projectsRes, experienceRes, skillsRes] = await Promise.all([
      axios.get("https://admin.nadeemsiyam.com/api/projects"),
      axios.get("https://admin.nadeemsiyam.com/api/experience"),
      axios.get("https://admin.nadeemsiyam.com/api/skills"),
    ]);

    const allProjects: Project[] = projectsRes.data;
    const projectList = allProjects.filter((p) => !p.featured);
    const featuredList = allProjects.filter((p) => p.featured);

    return {
      projects: projectList,
      featured: featuredList,
      experiences: experienceRes.data,
      skills: skillsRes.data,
    };
  } catch (error) {
    console.log("Failed to load home data");
    throw new Error("Failed to load home data");
  }
}
