//component ve jsx kuralları:
//1 - Yazılan component çağırılırken ilk harfi büyük olmalıdır. Küçük harf ile yazıldığında html etiketi olarak algılar.
//2 - Component dosya isminde ilk harfi küçük olabilir.
//3 -

import React from "react";

function Component() {
  //-------------------------------------------------------------------------------------------------------------------------------------------
  // return React.createElement ('div', null, React.createElement ('p', null));

  // return (
  //   <div>
  //     <p></p>
  //   </div>
  // );

  // Yukarıda kullanılan return'lar aynı işlevi görmektedir. İkinci return kullanımı jsx ile hayatımıza girip bizi karmaşadan kurtardı.
  //-------------------------------------------------------------------------------------------------------------------------------------------

  //Componentlerde değişken render etme...

  const yazı = "Merhabalar....";

  //Koşullu render işlemi..

  const isLoggedIn = true;
  const fullName = "Hasan Said SERTKAYA";

  //Props nedir? Özellik anlamına geliyor. Bir componenti ilk kez render ederken, onun görünümünü sağlayacak olan bilgileri vermek.
  //PropTypes  import PropTypes from "prop-types"; komutu ile component'e import edilir. Sıkça kullanmamız gerekecek.TypeScript kullanmadığımız için bu özellik ile tip güvenliğini sağlıyoruz.

  return (
    //Tek div kullanılır. <> </> fragment tagınıda kullanabiliriz. <> == <React.Fragment>
    <React.Fragment>
      <>
        {yazı}
        {/* Birinci kullanım:  */}
        {isLoggedIn ? "Hoşgeldiniz " + fullName : "Lütfen Giriş Yapınız !!!"}
        {/* İkinci kullanım: */}
        {isLoggedIn && <div>Hoşgeldiniz {fullName}</div>}
        {!isLoggedIn && <a href="">Giriş Yapınız</a>}

        <div className="test">
          <h1>Başlık</h1>
          <label htmlFor="test"></label>
        </div>
      </>
    </React.Fragment>
  );
}

export default Component;
