class Experience{
    constructor(title, company, role, start, end){
        this.title = title;
        this.company = company;
        this.role = role;
        this.start = start;
        this.end = end;
    }

}
class Skill{
    constructor(hard, soft, devops, isec, net,  script, standard, language){
        this.hard = hard;
        this.devops = devops;
        this.isec = isec;
        this.net = net;
        this.soft = soft;
        this.script = script;
        this.standard = standard;
        this.language = language;
    }
}
class Education{
    constructor(title, uni, grade, start, end){
        this.title = title;
        this.uni = uni;
        this.grade = grade;
        this.start = start;
        this.end = end;
    }
}

class Certification{
    constructor(short, title, year){
        this.short = short;
        this.title = title;
        this.year = year;
    }
}


class Course{
    constructor(title, year){
        this.title = title;
        this.year = year;
    }
}


class Hobby{
    constructor(name){
        this.name = name;
    }
}


class UI {
    
    onLoad(){
        const cvlist = document.getElementById('cv-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                Hi!</br></br>
                This repository contains my background, education, certifications, trainings, and hobbies. </br></br>
                Here more links:</br>
                <a href="https://www.linkedin.com/in/marianonamoroso"> linkedin </a></br>
                <a href="https://github.com/marianonamoroso"> github </a></br>
                <a href="https://twitter.com/MarianAmoroso"> twitter </a></br>
		<a href="https://hub.docker.com/u/agocho"> dockerhub </a></br>
		
            </div>
            `;
            cvlist.appendChild(element);

    }

    deleteNodes(){
        const cvlist = document.getElementById('cv-list');
        cvlist.innerHTML = '';
    }

    showEdu(edu){
        const cvlist = document.getElementById('cv-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    ${edu.title}</br>
                    ${edu.uni}</br>
                    ${edu.grade}</br>
                    ${edu.start} -
                    ${edu.end}
                </div>
            </div>
            `;
            cvlist.appendChild(element);
        }

    showExp(exp){
            const cvlist = document.getElementById('cv-list');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        ${exp.company}</br>
                        ${exp.title}</br>
                        ${exp.start} -
                        ${exp.end} </br>
                        ${exp.role}
                    </div>
                </div>
                `;
                cvlist.appendChild(element);
            }

    showCert(cert){
        const cvlist = document.getElementById('cv-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    ${cert.short}</br>
                    ${cert.title}</br>
                    ${cert.year} </br>
                </div>
            </div>
            `;
            cvlist.appendChild(element);
            }

    showHobby(hb){
        const cvlist = document.getElementById('cv-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    ${hb.name}</br>
                </div>
            </div>
            `;
            cvlist.appendChild(element);
            }

    showCourse(course){
    const cvlist = document.getElementById('cv-list');
    const element = document.createElement('div');
    element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                ${course.title}</br>
                ${course.year} </br>
            </div>
        </div>
        `;
        cvlist.appendChild(element);
        }
    showSkill(skill){
            const cvlist = document.getElementById('cv-list');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong style="color:#ADD8E6">Technical:</strong> </br> ${skill.hard} </br>
                    </div>
                </div>
                <div class="card text-center mb-4">
                    <div class="card-body">
                    <strong style="color:#ADD8E6">DevOps:</strong> </br> ${skill.devops} </br>
                    </div>
                </div>

                <div class="card text-center mb-4">
                    <div class="card-body">
                    <strong style="color:#ADD8E6">Security:</strong> </br> ${skill.isec} </br>
                    </div>
                </div>
                <div class="card text-center mb-4">
                    <div class="card-body">
                    <strong style="color:#ADD8E6">Networking:</strong> </br> ${skill.net} </br>
                    </div>
                </div>
                <div class="card text-center mb-4">
                    <div class="card-body">
                    <strong style="color:#ADD8E6">Soft:</strong> </br> ${skill.soft} </br>
                    </div>
                </div>

                <div class="card text-center mb-4">
                    <div class="card-body">
                    <strong style="color:#ADD8E6">Scripting: </strong></br> ${skill.script} </br>
                    </div>
                </div>
                <div class="card text-center mb-4">
                    <div class="card-body">
                    <strong style="color:#ADD8E6">Standards: </strong></br> ${skill.standard} </br>
                    </div>
                </div>

                <div class="card text-center mb-4">
                    <div class="card-body">
                    <strong style="color:#ADD8E6">Languages: </strong></br> ${skill.language} </br>
                    </div>
                </div>
                `;
                cvlist.appendChild(element);

    }
}

// DOM Events
let ui = new UI();

/* Load */
ui.onLoad();

/* Hobbies */
document.getElementById('btn-hobbies')
    .addEventListener('click', function(e){
        ui.deleteNodes();

        let name = "Sports";
        let hb = new Hobby(name.fontcolor("white"));

        ui.showHobby(hb);
        
        name = "Gaming";
        hb = new Hobby(name.fontcolor("white"));

        ui.showHobby(hb);

        name = "Movies";
        hb = new Hobby(name.fontcolor("white"));

        ui.showHobby(hb);

        e.preventDefault();
    
    });

/* Skills */
document.getElementById('btn-skill')
    .addEventListener('click', function(e){
        
        let hard = "DevOps, Cloud Security & Scripting.";
        let devops = "AWS, Terraform, Docker, Kubernetes, Helm, GitLab, GitHub Actions & Datadog.";
        let isec = "SIEM, IAM, DDoS, WAF, IPS & FW";
        let net = "HTTP/S, API, DNS, SSH, VPN";
        let soft = "Collaborative, Proactive, Agile, Detail-Orientated & Customer-Centric.";
        let script = "Bash & Python.";
        let standard = "NIST, ISO & OWASP.";
        let language = "English & Spanish.";
        let skill = new Skill(hard.fontcolor("white"), soft.fontcolor("white"),  devops.fontcolor("white"),
        isec.fontcolor("white"), net.fontcolor("white"),
        script.fontcolor("white"), standard.fontcolor("white"), language.fontcolor("white"));

        ui.deleteNodes();
        ui.showSkill(skill);

        e.preventDefault();
    
    });

/* Courses */
document.getElementById('btn-courses')
.addEventListener('click', function(e){
    ui.deleteNodes();

    let title = "Kuberentes Administrator"
    let year = "2022"
    let course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);
    title = "Kuberentes Developer"
    year = "2021"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "AWS SysOps Administrator - Associate"
    year = "2021"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "AWS Developer - Associate"
    year = "2021"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "HashiCorp Certified: Terraform Associate"
    year = "2021"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "AWS Solutions Architect - Associate"
    year = "2021"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "AWS Cloud Practitioner"
    year = "2021"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "AX200 Magnet AXIOM Examination"
    year = "2020"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Python Essentials"
    year = "2020"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Splunk Fundamentals"
    year = "2020"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "F5 Configuring BIG-IP AFM: Advanced Firewall Manager"
    year = "2020"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Wireless Attacks (WiFu)"
    year = "2020"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "F5 Aplication Security Manager BIG-IP"
    year = "2019"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "F5 Administering BIG-IP"
    year = "2019"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Penetration Testing with Kali Linux (PWK)"
    year = "2019"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Forensic Analysis and Digital Investigations"
    year = "2018"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "CEHv10"
    year = "2018"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Computer Forensic"
    year = "2018"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Penetration Testing Professional"
    year = "2018"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Penetration Testing Student"
    year = "2018"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Cybersecurity for Financial Entities"
    year = "2017"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Cyber Operations"
    year = "2017"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Computer Forensic Expert"
    year = "2016"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);

    title = "Routing & Switching"
    year = "2016"
    course = new Course(title.fontcolor("lightblue").bold(),  year.fontcolor("white"));

    ui.showCourse(course);
    

    e.preventDefault();

});

/* Certs */
document.getElementById('btn-certs')
    .addEventListener('click', function(e){
        ui.deleteNodes();
	let short = "CKA";
        let title = "Certified Kubernetes Administrator"
        let year = "2022"
        let cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);
	
        short = "CKAD";
        title = "Certified Kubernetes Application Developer"
        year = "2021"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "AWS SOA";
        title = "AWS Certified SysOps Administrator - Associate"
        year = "2021"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "AWS DVA";
        title = "AWS Certified Developer - Associate"
        year = "2021"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);
     
        short = "AWS SAA";
        title = "AWS Certified Solutions Architect - Associate"
        year = "2021"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "AWS CLF";
        title = "AWS Cloud Practitioner"
        year = "2021"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "HCTA";
        title = "HashiCorp Certified: Terraform Associate"
        year = "2021"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);
	
	short = "PCAP";
        title = "Certified Associate in Python"
        year = "2020"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "PCEP";
        title = "Certified Entry-Level in Python"
        year = "2020"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "OSWP";
        title = "Offensive Security Wireless Professional"
        year = "2020"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "OSCP";
        title = "Offensive Security Certified Professional"
        year = "2019"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "eCPPT";
        title = "eLearnSecurity Certified Professional Penetration Tester"
        year = "2019"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "eJPT";
        title = "eLearnSecurity Junior Penetration Tester"
        year = "2018"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "CEH";
        title = "Certified Ethical Hacker"
        year = "2019"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "SEC+";
        title = "CompTIA Security+"
        year = "2017"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "CCNA Cyber Ops";
        title = "Cisco Certified Network Associate Cyber Ops"
        year = "2017"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        short = "CCNA Security";
        title = "Cisco Certified Network Associate Security"
        year = "2016"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);
        
        short = "CCNA RS";
        title = "Cisco Certified Network Associate Routing & Switching"
        year = "2016"
        cert = new Certification(short.fontcolor("lightblue").bold(), title.fontcolor("white"),  year.fontcolor("white"));

        ui.showCert(cert);

        e.preventDefault();
    
    });

/* Education */
document.getElementById('btn-edu')
    .addEventListener('click', function(e){
        ui.deleteNodes();
	
	let title = "Information Security";
        let grade = "Master"
        let uni = "UBA";
        let start = "2020";
        let end = "WIP (Thesis)";
        let edu = new Education(title.fontcolor("lightblue").bold(),uni.fontcolor("white"),grade.fontcolor("white"),
        start.fontcolor("white"),end.fontcolor("white"));
       
        ui.showEdu(edu);

        title = "Information Security Specialist";
        grade = "Postgraduate"
        uni = "UBA";
        start = "2019";
        end = "2020";
        edu = new Education(title.fontcolor("lightblue").bold(),uni.fontcolor("white"),grade.fontcolor("white"),
        start.fontcolor("white"),end.fontcolor("white"));
       
        ui.showEdu(edu);

        title = "Cybercrime and Digital Evidence";
        grade = "Postgraduate"
        uni = "UBA";
        start = "2018";
        end = "2019";
        edu = new Education(title.fontcolor("lightblue").bold(),uni.fontcolor("white"),grade.fontcolor("white"),
        start.fontcolor("white"),end.fontcolor("white"));
       
        ui.showEdu(edu);

        title = "Information Systems Engineer";
        grade = "Graduate"
        uni = "UAI";
        start = "2007";
        end = "2014";
        edu = new Education(title.fontcolor("lightblue").bold(),uni.fontcolor("white"),grade.fontcolor("white"),
        start.fontcolor("white"),end.fontcolor("white"));
       
        ui.showEdu(edu);

        e.preventDefault();
    
    });

/* Experience*/
document.getElementById('btn-exp')
    .addEventListener('click', function(e){
        ui.deleteNodes();
	/* D24 */
        let title = "DevOps Engineer";
        let company = "Directa24";
        let role = "";
        let start = "02/2023";
        let end = "Present";
        let exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
        ui.showExp(exp);
	
	/* PYF */
        title = "DevOps Consultant";
        company = "PYF";
        role = "";
        start = "12/2022";
        end = "02/2023";
        exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
        ui.showExp(exp);
	
	 /* Ripio */
        title = "DevOps Lead";
        company = "Ripio";
        role = "";
        start = "03/2022";
        end = "12/2022";
        exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
        ui.showExp(exp);
	
        /* Caylent */
        title = "DevSecOps Engineer";
        company = "Caylent";
        role = "Involved in initial implementation, integration, and automation of the infosec objectives identified to improve the security and/or compliance posture of a customer’s environments and cloud infrastructure.";
        start = "03/2021";
        end = "03/2022";
        exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
        ui.showExp(exp);
        
	/* PJN */
        title = "Digital Forensic Expert";
        company = "PJN";
        role = "Extract information from digital assets in order to analyze the evidence, draw conclusions and prepare the relevant reports based on best practices, for subsequent presentation to a court.";
        start = "10/2015";
        end = "12/2021";
        exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
        ui.showExp(exp);
	
        /* KCC */
        title = "ITS Incident Response";
        company = "Kimberly Clark";
        role = "Analyze security events and identify trends, attacks, and potential threats. Also, conduct forensic investigations including physical/logical disk and memory examinations.";
        start = "08/2020";
        end = "04/2021";
        exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
        ui.showExp(exp);
        
	/* BA-CSIRT */
        title = "Information Security Leader";
        company = "BA-CSIRT";
        role = "Perform pentesting and vulnerability assessments in webs, ws, infra and mobile. Also, engineering, implementing and monitoring security measures for the protection of computer systems, networks and information."
        start = "02/2018";
        end = "08/2020";
        exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
        ui.showExp(exp);
        
        /* MB */
         title = "Information Security Analyst";
         company = "Mercedes-Benz Financial Services";
         role = "Identity and Access Management (IAM). Also, assets and vulnerability management";
         start = "03/2017";
         end = "01/2018";
         exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
         ui.showExp(exp);


        /* Xelere */
         title = "Information Security Consultant";
         company = "Xelere";
         role = "Implementation and post-implementation for security solutions. Also, making alerts, rules and reports based on SIEM.";
         start = "07/2016";
         end = "02/2017";
         exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
         ui.showExp(exp);

        /* How Know IT */
         title = "Software Engineer";
         company = "How Know IT";
         role = "Design and develop web application (C#)";
         start = "06/2014";
         end = "10/2015";
         exp = new Experience(title.fontcolor("white"), company.fontcolor("lightblue").bold(), role.fontcolor("gray"), start.fontcolor("white"), end.fontcolor("white"));
         ui.showExp(exp);

        e.preventDefault();
});
