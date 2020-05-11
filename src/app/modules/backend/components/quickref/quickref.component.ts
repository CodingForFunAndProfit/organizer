import { Component, OnInit } from '@angular/core';
import { QuickRefService } from 'src/app/services/quickref.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LogService } from 'src/app/services/logger/log.service';
import { Ref } from 'src/app/entities/ref/ref.entity';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-quickref',
    templateUrl: './quickref.component.html',
    styleUrls: ['./quickref.component.scss'],
})
export class QuickRefComponent implements OnInit {
    title: string = 'QuickReference';
    search: FormControl;
    form: FormGroup;
    refs: Ref[];
    filteredRefs: Observable<Ref[]>;
    constructor(private qickref: QuickRefService, private formBuilder: FormBuilder, private titleService: Title, private log: LogService) {
        this.search = new FormControl('');
        this.form = this.formBuilder.group({
            search: this.search,
        });
        this.refs = [
            new Ref({ id: '0', title: 'git checkout -b <branchname> master ' }),
            new Ref({ id: '1', title: 'git add .' }),
            new Ref({ id: '2', title: 'git commit -m "Commitmessage"' }),
            new Ref({ id: '3', title: 'git push -u origin <branchname>' }),
            new Ref({ id: '4', title: 'git checkout master' }),
            new Ref({ id: '5', title: 'git clone <repourl>' }),
        ];
    }

    ngOnInit(): void {
        this.titleService.setTitle(`Organizer: ${this.title}`);
        this.filteredRefs = this.search.valueChanges.pipe(
            startWith(''),
            map((value: string) => this._filter(value))
        );
    }

    private _filter(value: string): Ref[] {
        const filterValue = value.toLowerCase();

        return this.refs.filter((ref) => ref.title.toLowerCase().includes(filterValue));
    }
    public async onsearch() {
        this.log.info('search');
    }
}
