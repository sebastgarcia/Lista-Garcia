export class Alumno {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public primerTrimestre: number,
    public segundoTrimestre: number,
    public tercerTrimestre: number,
    

  ) {}


get promedio(): number{
  return (this.primerTrimestre + this.segundoTrimestre + this.tercerTrimestre) / 3;
  } 

get aprobacion(): boolean{
  if (this.promedio >= 7){
    return true}

  else {return false}

  }
}