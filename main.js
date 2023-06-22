const addProjects = (projects) => {
    const main = document.querySelector('main'); // définition du conteneur parent

    projects.forEach(project => {
        // déclaration des variables (propriétés des objets "Projets")
        let projectName = project.name;
        let projectDate = project.date;
        let projectCourse = project.cours;
        let projectImg = project.imgSrc;
        let projectTechnologies = project.technologies;

        // création de la carte
        let projectCard = document.createElement('section');
        let projectCardHeader = document.createElement('header');
        let projectCardTechList = document.createElement('ul');

        // ajout du header dans la carte
        projectCardHeader.innerHTML = `<h2>${projectName}</h2>`;
        projectCardHeader.innerHTML += `<h3>${projectDate}</h3>`;
        projectCardHeader.innerHTML += `<h4>${projectCourse}</h4>`;
        projectCard.appendChild(projectCardHeader);

        // ajout de l'image 
        projectCard.innerHTML += `<img src="${projectImg}"/>`;

        projectTechnologies.forEach(technologie => {
            let projectCardTechListItem = document.createElement('li');
            projectCardTechListItem.innerHTML += `${technologie}`;
            if (projectTechnologies.indexOf(technologie) !== projectTechnologies.length - 1) {
                projectCardTechListItem.innerHTML += ` / `;
            }
            projectCardTechList.appendChild(projectCardTechListItem);
        })
        projectCard.appendChild(projectCardTechList);

        projectCard.innerHTML += `<a href="${project.url}">Voir le projet</a>`

        main.appendChild(projectCard);
    });

/*     projects.forEach(project => {
        let projectName = project.name;
        let projectDate = project.date;
        let projectImg = project.imgSrc;
        let projectTechnologies = project.technologies;

        let projectCard = document.createElement('section');
        let projectCardTechList = document.createElement('ul');
        let projectCardTechListItem = document.createElement('li');

        projectCard.innerHTML =
        `<header>
            <h2>${projectName}</h2>
            <h3>${projectDate}</h3>
        </header>
        <img src=${projectImg} />`;

        projectTechnologies.forEach(technologie => {
            projectCardTechListItem.innerHTML += `${technologie}`;
            if (projectTechnologies.indexOf(technologie) !== projectTechnologies.length -1) {
                projectCardTechListItem.innerHTML += ` / `;
            }
            projectCardTechList.appendChild(projectCardTechListItem);
        })
        projectCard.appendChild(projectCardTechList);

        main.appendChild(projectCard);


    }) */
}

const getProjects = () => {

    fetch('./data/projets.json')
    .then(data => data.json())
    .then(data => addProjects(data));

}

getProjects();