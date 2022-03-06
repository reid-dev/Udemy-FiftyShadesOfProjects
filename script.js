import Projects from './Day0 - Templates/projectdata.js'

const projects = Projects;

loadProjects()

function loadProjects() {
    projects.forEach(project=> { 
        const proEl= document.createElement('div');
        proEl.classList.add('project');
        proEl.innerHTML=`
        <a class="project-a" href='${project.url}'>
        <h3 class="projecttitle" id="projecttitle">${project.name}</h3>
        <p class="projectdescripton" id="projectdescription">
        ${project.description}
        </p>  
        </div>
        </a>
        `
        document.getElementById("projects").appendChild(proEl)

    })
}


