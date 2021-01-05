import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public image: string;

  public cappelli: Array<String>;
  public magliette: Array<String>;
  public pantaloni: Array<String>;
  public scarpes: Array<String>;

  public cappello: String;
  public maglietta: String;
  public pantalone: String;
  public scarpa: String;
  public provola: String;

  public images: Array<Array<String>>;
  public indexes: number[] = [0, 1, 2, 3];
  


  constructor(private activatedRoute: ActivatedRoute, private filePath: FilePath,
    private camera: Camera) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.cappello = "https://lh3.googleusercontent.com/proxy/VFP33jYqyytcUlxHmR0-bUOcIWR54DJeBgPDKGo3Fc_irLv039L4cqrSHCROF_17U97Mc3coBKfkOC4LanxJPsWz_wwcqSyYQkZ1ujuV6ZOIYxcY5mB01Pr46-w-KZ1SWJ461vfcWplzEyulUh1k1zAUD_5v9Fi1";
    this.maglietta = "https://img01.ztat.net/article/spp-media-p1/c2adf713a3f53ebe9c016ea13404f282/b8375d7d990b4ea680067665470862d2.jpg?imwidth=1800&filter=packshot";
    this.pantalone = "https://img01.ztat.net/article/spp-media-p1/336a02c460ae3c979c0da5711b726f5a/1e0c3fea22594f1192a496c4998f509a.jpg?imwidth=156&filter=packshot%C3%B9";
    this.scarpa = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjKJy0QLhHiKPmrAqajMEP_OlylzyC5GVzg&usqp=CAU";
    this.provola = "ciao";
    let i = 0;
    this.images = new Array<Array<String>>();
    for (let i = 0; i < 4; i++) {
      let temp = new Array<String>();
      temp.push("https://lh3.googleusercontent.com/proxy/VFP33jYqyytcUlxHmR0-bUOcIWR54DJeBgPDKGo3Fc_irLv039L4cqrSHCROF_17U97Mc3coBKfkOC4LanxJPsWz_wwcqSyYQkZ1ujuV6ZOIYxcY5mB01Pr46-w-KZ1SWJ461vfcWplzEyulUh1k1zAUD_5v9Fi1");   
      temp.push("https://img01.ztat.net/article/spp-media-p1/c2adf713a3f53ebe9c016ea13404f282/b8375d7d990b4ea680067665470862d2.jpg?imwidth=1800&filter=packshot");   
      temp.push("https://img01.ztat.net/article/spp-media-p1/336a02c460ae3c979c0da5711b726f5a/1e0c3fea22594f1192a496c4998f509a.jpg?imwidth=156&filter=packshot%C3%B9");   
      temp.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjKJy0QLhHiKPmrAqajMEP_OlylzyC5GVzg&usqp=CAU");   
      
      this.images.push(temp);
    }

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }


    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.provola = "done!";
     }, (err) => {
      this.provola = err;
     });

/*
    this.filePath.resolveNativePath("")
  .then(filePath => {console.log(filePath); this.provola = "done!";})
  .catch(err => {console.log(err); this.provola = "porca zozza!";});*/
    
  }




  chageCappello(avanti){
    if(avanti){
      this.cappello = this.chagePositive(0);
    }
    else{
      this.cappello = this.chageNegative(0);
    }
  }

  changeMaglia(avanti){
    if(avanti){
      this.maglietta = this.chagePositive(1);
    }
    else{
      this.maglietta = this.chageNegative(1);
    }
  }

  changePantalone(avanti){
    if(avanti){
      this.pantalone = this.chagePositive(2);
    }
    else{
      this.pantalone = this.chageNegative(2);
    }
  }

  changeScarpa(avanti){
    if(avanti){
      this.scarpa = this.chagePositive(3);
    }
    else{
      this.scarpa = this.chageNegative(3);
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



}
