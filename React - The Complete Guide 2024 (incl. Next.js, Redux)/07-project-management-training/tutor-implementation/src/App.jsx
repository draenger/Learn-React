import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
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

  function handleRemoveProject() {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );

      const updatedTasks = prevState.tasks.filter(
        (task) => task.projectId !== prevState.selectedProjectId
      );

      return {
        projects: updatedProjects,
        tasks: updatedTasks,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function handleAddTask(taskName) {
    setProjectsState((prevState) => {
      const newTask = {
        id: Math.random().toString(),
        projectId: projectsState.selectedProjectId,
        name: taskName,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancelAddProject={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = (
      <SelectedProject
        project={projectsState.projects.find(
          (project) => project.id === projectsState.selectedProjectId
        )}
        tasks={projectsState.tasks.filter(
          (task) => task.projectId === projectsState.selectedProjectId
        )}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onRemoveProject={handleRemoveProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
        onStartAddProject={handleStartAddProject}
        onProjectSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
