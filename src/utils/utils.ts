
interface createPathDivInterFace{
    ref: HTMLElement, 
    propertyName: string, 
    path: (width: number, height: number) => string 
}


export function createPathDiv({ref, propertyName, path}: createPathDivInterFace){

    const width = ref.clientWidth;
    const height = ref.clientHeight;

    const topPath = path(width, height) 

    // Atribui a variável CSS à div diretamente
    ref.style.setProperty(propertyName, `"${topPath}"`);

}