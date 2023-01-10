// Binary to Decimal Conversion -  2'lik Sayıdan 10'luğa Çevirme Uygulaması
// Binary sayımızın basamaklarını sırasıyla sağdan sola 2'nin önce 0. sonra 1. daha sonra 2. vb. şekilde yükselerek çarpıyoruz. Daha sonra çıkan sayıları toplayarak decimal sayımızı elde ediyoruz.
// Math.pow metodu bir sayının üssünü almak için kullanılır. Örnek olarak console.log(Math.pow(2,3)) dersek; 2'nin 3. kuvvetini al demiş oluruz. Bu da 8 sonucunu verir.

let binary = "1101011";

function convertBinaryToDecimal(binary) {
  let toplam = 0;
  let ust = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
    ust++;
  }
  console.log("Sonuç : " + toplam);
}

convertBinaryToDecimal(binary);
