export class Aukcija {
    naziv: string = '';
    pocetak: string = '';
    kraj: string = '';
    umetnine: {naziv:string,ponuda:string,vlasnik:string}[]=[];
    istekla:boolean=false;
  }
