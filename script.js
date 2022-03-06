import Projects from './Day0 - Templates/projectdata.js'

const projects = Projects;

loadProjects()

function loadProjects() {
    projects.forEach(project=> { 
        const proEl= document.createElement('div');
        proEl.classList.add('project');
        proEl.innerHTML=`
        <h3 class="projecttitle" id="projecttitle">${project.name}</h3>
        <button class="projectlink-btn" id="projectlink-btn" onclick="window.location.href='${project.url}';" >
            <i class="fa-solid fa-arrow-trend-up"></i>
        </button>
        <p class="projectdescripton" id="projectdescription">
        ${project.description}
        </p>  
        </div>
        `
        document.getElementById("projects").appendChild(proEl)

    })
}


