//component ve jsx kuralları:
//1 - Yazılan component çağırılırken ilk harfi büyük olmalıdır. Küçük harf ile yazıldığında html etiketi olarak algılar.
//2 - Component dosya isminde ilk harfi küçük olabilir.
//3 -

function Header() {
  // return React.createElement ('div', null, React.createElement ('p', null));

  // return (
  //   <div>
  //     <p></p>
  //   </div>
  // );

  // Yukarıda kullanılan return'lar aynı işlevi görmektedir. İkinci return kullanımı jsx ile hayatımıza girip bizi karmaşadan kurtardı.

  return (
    <div>
      <h1>Başlık</h1>
    </div>
  );
}

export default Header;
