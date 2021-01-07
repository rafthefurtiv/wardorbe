import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import {Type} from '../models/type';





@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public debug: boolean = false;
  public folder: string;
  public image: string;

  public cappelli: Array<String>;
  public magliette: Array<String>;
  public pantaloni: Array<String>;
  public scarpes: Array<String>;


  public provola: String;
  public console2: String;

  public vuoto = "https://merriam-webster.com/assets/mw/images/gallery/gal-home-edpick-lg/empty-speech-bubble-7508-68642ecb0f0a19313dd31c16f67e67e1@1x.jpg";

  public images: Array<Array<void>>;
  public indexes: number[] = [0, 0, 0, 0];

  public types: Array<Type> = [new Type(0, "cappello"), new Type(1, "maglietta"), new Type(2, "pantalone"), new Type(3, "scarpa")];
  


  constructor(private activatedRoute: ActivatedRoute, private filePath: FilePath,
    private camera: Camera, private file: File) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    let i = 0;
    this.images = new Array<Array<void>>();
 


    this.types.forEach(type =>{
      this.file.createDir(this.file.externalDataDirectory, type.name, false);
    });


    this.loadPhotos(null);

  
  }


  changeIndex(type, incremental){
    if(incremental){
      this.chagePositive(type);
    }
    else{
      this.chageNegative(type);
    }
  }



  chagePositive(index){
    this.indexes[index]++;
    if(this.indexes[index] > this.images[index].length - 1){
      this.indexes[index] = 0;
    }
    
    return this.images[index][this.indexes[index]];
  }

  chageNegative(index){
    this.indexes[index]--;
    if(this.indexes[index] < 0){
      this.indexes[index] = this.images[index].length - 1;
    }

    return this.images[index][this.indexes[index]];
  }


  getSeparetedUrl(url){
    let fileNameOld = url.substring(url.lastIndexOf("/") + 1);
    let oldPath = url.substring(0, url.lastIndexOf("/") + 1);

    return [oldPath, fileNameOld];
  }

  loadPhotos(typeToReload){
    this.types.forEach(type => {

      if(typeToReload === null || typeToReload === type.name){
        this.images[type.index] = new Array<void>();
        this.file.listDir(this.file.externalDataDirectory, type.name).then(files => {
          this.images[type.index].pop();
          files.forEach(ele => {
            this.provola += type.index + ")" +  type.name + "\n";
            if(ele.isFile){
              this.provola += ele.nativeURL + "\n";
              let photo;
              let vet = this.getSeparetedUrl(ele.nativeURL);
              this.file.readAsDataURL(vet[0], vet[1])
              .then((data)=>{
                photo = data;
                this.images[type.index].push(photo);
              })
              .catch((err)=>{
                console.log("error: " + JSON.stringify(err));
                this.console2 = JSON.stringify(err);
              });
            }        
          });
        });
    }
    });


  }

  getPhotoFromUrl(url, fileName){
    this.file.readAsDataURL(url, fileName)
    .then((data)=>{
      return data;
    })
    .catch((err)=>{
      console.log("error: " + JSON.stringify(err));
    });
  }

  getNewPhoto(type){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false // to turn on true
    }

    this.camera.getPicture(options).then((imageData) => {
      let fileNameOld = imageData.substring(imageData.lastIndexOf("/") + 1);
      let oldPath = imageData.substring(0, imageData.lastIndexOf("/") + 1);

      let newPath = this.file.externalDataDirectory+type+"/";
      let newFileName = type + "_" + new Date().getTime().toString()+ ".jpg";

      this.file.copyFile(oldPath, fileNameOld, newPath, newFileName).then(
        (res) => {
          this.console2 = res + " Done";
          this.loadPhotos(type);
        });

      });
      

  }



}
