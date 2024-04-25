  // Save To PDF
  import html2pdf from "html2pdf.js";
  export const createResume = () => {
    const resume = document.getElementById("resume");

    // To convert in canva use library html2canva here
    // html2canvas(resume).then((canva)=>{
    //   let base64image = canva.toDataURL('image/png')
    // })

    // To convert in PDF use library html2pdf
    const res = html2pdf().from(resume).save("resume.pdf");
    if (res) {
      console.log(res);
    }
  };