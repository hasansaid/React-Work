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

  //Componentlerde değişken render etme.

  const yazı = "Merhabalar....";

  return (
    //Tek div kullanılır. <> </> fragment tagınıda kullanabiliriz. <> == <React.Fragment>
    <React.Fragment>
      <>
        {yazı}
        <div className="test">
          <h1>Başlık</h1>
          <label htmlFor="test"></label>
        </div>
      </>
    </React.Fragment>
  );
}

export default Component;
