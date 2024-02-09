export class Event {
    naziv: string = '';
    mesto: string = '';
    organizator: string = '';
    datum: string = '';
    dolazi: {korisnik:string, posluzenje:string}[] = [];
    show:boolean=false;
}