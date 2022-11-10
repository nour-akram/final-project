import React from 'react'
import './Report.css'
export const Report = () => {
  return (
    <div>
        
        <body className="p-2">
    <main className="border border-2 p-2">
      <div className="text-center">
        <img
          src="https://jumia.secure.force.com/CounterfeitCaseForm/resource/1526644228000/JuliaLogo"
          alt=""
        />
      </div>
      <hr className="mx-auto mb-3" style={{width: "98%"}} />
      <form className="row px-3" id="form">
        <div className="col-lg-6">
          <label className="d-flex flex-column mb-4" style={{fontSize: "13px"}}
            >*First & Last Name / Nom & Prénom / الاسم واللقب
            <input type="text" className="input p-1 rounded-2" />
          </label>
          <label className="d-flex flex-column mb-4" style={{fontSize: "13px"}}
            >*Country / Pays / البلد
            <select
              disabled
              className="input p-1 rounded-2 no-select"
              style={{backgroundColor: "#eee"}}
            >
              <option value="Egypt">Egypt</option>
            </select>
          </label>
          <label className="d-flex flex-column mb-4" style={{fontSize: "13px"}}
            >**Requester Type / Type de demandeur / نوع مقدم الطلب
            <select className="input p-1 rounded-2">
              <option value="Select">Select</option>
              <option value="Individual">
                Individual / Individuel / جهة فردية
              </option>
              <option value="Organization">
                Organization / Organisation / مؤسسة
              </option>
            </select>
          </label>
          <label className="d-flex flex-column mb-4" style={{fontSize: "13px"}}
            >*Reason for Reporting * / Raison du signalement * / سبب الابلاغ *
            <select className="input p-1 rounded-2">
              <option value="Select">Select</option>
              <option value="Replicated product">
                Product appears to be replica or counterfeit / Le produit semble
                être une réplique ou une contrefaçon / المنتج غير أصلي أو مقلد
              </option>
              <option value="Inappropriate content">
                Product description contains inappropriate content / La
                description du produit contient un contenu inapproprié / وصف
                المنتج يحتوي على محتوى غير لائق
              </option>
              <option value="Misleading information">
                Product description appears to be wrong or misleading
                information / La description du produit semble avoir une
                information erronée / وصف المنتج غير صحيح أو متضارب
              </option>
              <option value="Prohibited Product">
                Product may be prohibited or banned by law / Le produit n'est
                pas autorisé ou interdit par la loi / المنتج محظور أو ممنوع بيعه
                من قبل القانون
              </option>
            </select>
          </label>
          <label className="d-flex flex-column mb-4" style={{fontSize: "13px"}}>
            Additional Details / Détails supplémentaires / معلومات إضافية
            <textarea className="input p-2 rounded-2"></textarea>
          </label>
        </div>
        <div className="col-lg-6">
          <label className="d-flex flex-column mb-4" style={{fontSize: '13px'}}
            >*Email Address / Adresse e-mail / البريد الإلكتروني
            <input type="text" className="input p-1 rounded-2" />
        </label>
        <label className="d-flex flex-column mb-4" style={{fontSize: "13px"}}
          >*Phone Number / Numéro de téléphone / رقم الهاتف
          <input type="text" className="input p-1 rounded-2" />
        </label>
        <label className="d-flex flex-column mb-4" style={{fontSize: "13px"}}
          >Company or Organization's Name / Nom de l'entreprise ou de l'organisation / اسم الشركة أو المؤسسة
          <input type="text" className="input p-1 rounded-2" />
        </label>
        <label className="d-flex flex-column mb-4" style={{fontSize: "13px"}}
          >*Product Link (s) * / Liens des Produit(s)* / رابط المنتج (المنتجات) *
          <input type="text" className="input p-1 rounded-2" />
        </label>
        
      </div>
      <button className="mx-auto" style={{fontSize: '15px' ,width: 'max-content',border: '0', outline: 'none', color: '#0176d3', backgroundColor: 'transparent'}}>Submit</button>
    </form>
  </main>
    </body>    
        </div>
  )
}


export default Report