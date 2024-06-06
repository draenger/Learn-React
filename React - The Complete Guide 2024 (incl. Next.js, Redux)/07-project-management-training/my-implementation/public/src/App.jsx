import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(newProject) {
    newProject = { ...newProject, id: Math.random().toString(), tasks: [] };

    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      selectedProjectId: newProject.id,
    }));
  }

  function handleRemoveProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter(
        (project) => project.id !== projectId
      ),
      selectedProjectId: undefined,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function handleAddTask(taskName) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: [
              ...project.tasks,
              { id: Math.random().toString(), name: taskName },
            ],
          };
        }

        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  function handleRemoveTask(taskId) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }

        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else {
    content = (
      <SelectedProject
        {...projectsState.projects.find(
          (project) => project.id === projectsState.selectedProjectId
        )}
        onAddTask={handleAddTask}
        onRemoveTask={handleRemoveTask}
        onRemoveProject={handleRemoveProject}
      />
    );
  }

  console.log(projectsState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onProjectAdd={handleStartAddProject}
        onProjectSelect={handleSelectProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
