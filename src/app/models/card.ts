export class Card{
    public data: string;
    public name: string;
    public selected: boolean;

    constructor(data: string, name: string, selected: boolean){
        this.data = data;
        this.name = name;
        this.selected = selected;
    }
}