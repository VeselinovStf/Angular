import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './models/project';

@Component({
    templateUrl: 'client-project.component.html'
})
export class ClientProjectComponent implements OnInit {
    projects: Project[];

    constructor(private projectService: ProjectService){}

    ngOnInit(): void {
        this.getProjects();
    }

    private getProjects() : void {
        this.projectService.getProjects()
            .subscribe(project => this.projects = project);
    }
}