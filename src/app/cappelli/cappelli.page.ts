import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Card } from '../models/card';
import { ActivatedRoute } from '@angular/router';
import { Chooser } from '@ionic-native/chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';


@Component({
  selector: 'app-cappelli',
  templateUrl: './cappelli.page.html',
  styleUrls: ['./cappelli.page.scss'],
})
export class CappelliPage implements OnInit {
  private pathToFolder: string;
  private listFiles: Array<string>;
  private listPhotos: Array<Card>;
  private checkVisibles: boolean;
  private section: string;
  private title: string;




  private provola: string;
  private consol: string;



  constructor(private file: File, private filePath: FilePath, private activatedRoute: ActivatedRoute,
    private chooser: Chooser) {
   }

  ngOnInit() {
    this.activatedRoute.params.forEach(a => {
      if(a['id'] !== undefined){
        this.section = a['id'];
        this.loadSection();
      }
      //this.section = a['id'];
    });

    //this.provola = this.activatedRoute.queryParams['id'];


    this.pathToFolder = this.file.externalDataDirectory + this.section +"/";
    this.listFiles = new Array<string>();
    this.listPhotos = new Array<Card>();

    this.checkVisibles = false;


    this.loadPhotos();

  }


  loadPhotos(){
    this.file.listDir(this.file.externalDataDirectory, this.section +"/").then(files => {
      files.forEach(ele => {
        if(ele.isFile){
          this.file.readAsDataURL(this.pathToFolder, ele.name).then((data) => {
            let card = new Card(data, ele.name, false);
            this.listPhotos.push(card);
          });
        }        
      });
    });
  }

  loadSection(){
    switch(this.section){
      case 'cappelli': this.title = "Cappelli"; break;
      case 'magliette': this.title = "Magliette"; break;
      case 'pantaloni': this.title = "Pantaloni"; break;
      case 'scarpe': this.title = "Scarpe"; break;
    }
  }


  enableDisableSelection(){
    this.checkVisibles = !this.checkVisibles;
  }


  chosePhoto(){
    this.chooser.getFile()
  .then(uri => {
    this.filePath.resolveNativePath(uri.uri).then(url => {
      let fileNameOld = url.substring(url.lastIndexOf("/") + 1);
      let oldPath = url.substring(0, url.lastIndexOf("/") + 1);

      let newFileName = this.section + "_" + new Date().getTime().toString()+ ".jpg";
      //let oldPath = "file:///" + res.fullPath.substring(0, res.fullPath.lastIndexOf("/") + 1);
      //this.file.copyFile(oldPath, res.name, this.pathToFolder, newFileName);
      this.file.copyFile(oldPath, fileNameOld, this.pathToFolder, newFileName).then(
        (res) => {
          this.consol = res.fullPath;
          this.file.readAsDataURL(this.pathToFolder, newFileName).then((data) => {
            let card = new Card(data, newFileName, false);
            this.listPhotos.push(card); 
          });
        }).catch(err => {
          Object.keys(err).forEach(k => {
            this.consol += k+": " + err[k] + "  ---  ";
          });
        });;

    });

    });
  }

  deleteSelectioned(){
    this.listPhotos.forEach(p => {
      if(p.selected){
        this.file.removeFile(this.pathToFolder, p.name).then(data => {
          this.listPhotos.splice(this.listPhotos.indexOf(p), 1);
        });
      }
    });
    
  }

}
