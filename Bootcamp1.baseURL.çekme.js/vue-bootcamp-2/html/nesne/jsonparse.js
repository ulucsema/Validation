var json ='{"isim":"ibrahim","soyisim":"gökyar","yas":46,"bilgi":["c#","java","Android","ios"],"site":"https://www.opendart.com"}';

var veri = JSON.parse(json);
console.log(veri);

for(var anahtar in veri) {
    console.log("Özellik : " +anahtar+ " = " + veri[anahtar]);
}