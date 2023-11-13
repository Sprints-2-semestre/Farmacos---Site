function downloadPDF (){
    const canvas = document.getElementById('myChart');
    //criando imagem
    const canvasImage = canvas.toDataURL('image/jpeg', 1.0);
    console.log(canvasImage)
    // a imagem deve ir para o pdf

    let pdf = new jsPDF();
    pdf.setFontSize(20);
    pdf.addImage(canvasImage, 'JPEG', 15, 15, 280, 150);
    pdf.save('graficos.pdf');
}