import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-cappelli',
  templateUrl: './cappelli.page.html',
  styleUrls: ['./cappelli.page.scss'],
})
export class CappelliPage implements OnInit {
  private listFiles: Array<String>;
  private provola: string;
  private console2: string;

  constructor(private file: File) { }

  ngOnInit() {
    this.listFiles = new Array<String>();

    this.provola = this.file.externalDataDirectory;

    this.file.listDir(this.file.externalDataDirectory, "cappello/").then(files => {
      files.forEach(ele => {
        if(ele.isFile){
          this.listFiles.push(ele.fullPath);
        }        
      });
    });

  }

}
