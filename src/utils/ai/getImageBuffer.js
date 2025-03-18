require('dotenv').config();
const getImageBuffer = async( prompt,category)=>{
   const finalPrompt = `imagine a ${category} :${prompt}`;
   console.log(finalPrompt);


   const myForm = new FormData();
    myForm.append("image", finalPrompt);
    // console.log("API Key:", import.meta.env.VITE_CD_KEY);

    const response = await fetch("https://clipdrop-api.co/cleanup/v1", {
      method: "POST",
      headers: {
        "x-api-key": process.env.CD_KEY,
      },
      body: myForm,
    }) ;

    const buffer = await response.arrayBuffer();
    return buffer;
};
module.exports = getImageBuffer;