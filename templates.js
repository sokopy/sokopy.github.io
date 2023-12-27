class HTMLTemplate {
    constructor(title, globalName, text){
        this.title = title;
        this.text = text;
        this.globalName = globalName;
        this.buttons = []
    }
    addButton(temp){
        let btn = document.createElement("a");
        btn.innerText = temp.title
        btn.setAttribute("onclick", `swapTemplate(${temp.globalName})`);
        this.buttons.push(btn);
        return this;
    }
}
const mainTemplate = new HTMLTemplate("Portfolio", "mainTemplate", "");
const skillsTemplate = new HTMLTemplate("Skills", "skillsTemplate", "I know HTML, CSS, Javascript, Python and I am currently aiming to keep learning. All I know about programming was autonomously studied with various methods and sources, such as online courses, forums, documentations, and many more.");
const interestsTemplate = new HTMLTemplate("Interests","interestsTemplate", "I have developed a special interest for various topics, such as aviation, motorsports, programming, languages, phonetics, physics, medicine, psychology, history, and many more.");
const aboutMeTemplate = new HTMLTemplate("About me", "aboutMeTemplate", "I am a 16 years old self taught programmer from Mexico City. I started getting interested in coding since I was 13, starting with Discord bots. After watching a video on how to make one, I thought that I needed to understand what I was writing, rather than just copy it. I wanted to get started with Javascript, since it was the language my bots were coded using Node.JS, but I learned that it was used in web design, so I started learning HTML and CSS. After that, I wanted to learn actual programming, so I got started with Python.");
const swapTemplate = ((template)=>{
    const btnMenu = document.getElementById("btnMenu");
    btnMenu.innerHTML = "";
    document.getElementById("header").innerText = template.title;
    document.getElementById("paragraph").innerText = template.text;
    template.buttons.forEach(b => {btnMenu.appendChild(b);});
});
mainTemplate.addButton(aboutMeTemplate);
mainTemplate.addButton(skillsTemplate);
mainTemplate.addButton(interestsTemplate);
skillsTemplate.addButton(mainTemplate); aboutMeTemplate.addButton(mainTemplate); interestsTemplate.addButton(mainTemplate);
swapTemplate(mainTemplate);