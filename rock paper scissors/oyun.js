var oyuncupuan = 0;
var trineopuan = 0;
var round = 1;

var sayi = document.getElementById("round");
var oyuncuoyun = document.getElementById("oyuncuoyun");
var trineooyun = document.getElementById("trineooyun");
var oyuncusayi = document.getElementById("oyuncupuan");
var trineosayi = document.getElementById("trineopuan");
var oyundurumu = document.getElementById("durum");
var yenioyun = document.getElementById("yenioyun");
var resimler = document.getElementsByClassName("oyunlar");

function beyinoyun() {
    oyun = ["TAŞ", "KAĞIT", "MAKAS"];
    rastgele = Math.round(Math.random() * 2);
    sonuc = oyun[rastgele];
}


function tas() {
        beyinoyun();
        round++;
        sayi.innerHTML = round;
        oyuncuoyun.src = "tas.png";
        if(sonuc == "TAŞ"){
            trineooyun.src = "tas.png";
            oyundurumu.innerHTML = "BERABERE";
        }
        else if(sonuc == "KAĞIT"){
            trineooyun.src = "kagit.png";
            oyundurumu.innerHTML = "TRINEO KAZANDI";
            trineopuan++;
            trineosayi.innerHTML = trineopuan;
        }
        else{
            trineooyun.src = "makas.png";
            oyundurumu.innerHTML = "OYUNCU KAZANDI";
            oyuncupuan++;
            oyuncusayi.innerHTML = oyuncupuan;
        }
        if(oyuncupuan == 3 || trineopuan == 3){
            yenioyun.style.display = "block";
            $("#tas").prop("onclick", null).off("click");
            $("#kagit").prop("onclick", null).off("click");
            $("#makas").prop("onclick", null).off("click");
            yenioyun.addEventListener("click", baslat);
            document.getElementById("demo").style.display = "block"
            function baslat(){    
                document.getElementById("demo").style.display = "none"
                yenioyun.style.display = "none";
                document.getElementById("beyin").src = "brain.png";
                oyundurumu.innerHTML = "OYUN BAŞLASIN";
                round = 1;
                oyuncupuan = 0;
                trineopuan = 0;
                sayi.innerHTML = round;
                oyuncusayi.innerHTML = oyuncupuan;
                trineosayi.innerHTML = trineopuan;
                oyuncuoyun.src = "tas.png";
                trineooyun.src = "tas.png";
                $("#tas").attr("onclick", "tas()");
                $("#kagit").attr("onclick", "kagit()");
                $("#makas").attr("onclick", "makas()");
            }
        }
}

function kagit() {
    beyinoyun();
    round++;
    sayi.innerHTML = round;
    oyuncuoyun.src = "kagit.png";
    if(sonuc == "TAŞ"){
        trineooyun.src = "tas.png";
        oyundurumu.innerHTML = "OYUNCU KAZANDI";
        oyuncupuan++;
        oyuncusayi.innerHTML = oyuncupuan;
    }
    else if(sonuc == "KAĞIT"){
        trineooyun.src = "kagit.png";
        oyundurumu.innerHTML = "BERABERE";
        }
    else{
        trineooyun.src = "makas.png";
        oyundurumu.innerHTML = "TRINEO KAZANDI";
        trineopuan++;
        trineosayi.innerHTML = trineopuan;
    }
    if(oyuncupuan == 3 || trineopuan == 3){
        yenioyun.style.display = "block";
        $("#tas").prop("onclick", null).off("click");
        $("#kagit").prop("onclick", null).off("click");
        $("#makas").prop("onclick", null).off("click");
        yenioyun.addEventListener("click", baslat);
        document.getElementById("demo").style.display = "block"
        function baslat(){
            document.getElementById("demo").style.display = "none"
            yenioyun.style.display = "none";
            document.getElementById("beyin").src = "brain.png";
            oyundurumu.innerHTML = "OYUN BAŞLASIN";
            round = 1;
            oyuncupuan = 0;
            trineopuan = 0;
            sayi.innerHTML = round;
            oyuncusayi.innerHTML = oyuncupuan;
            trineosayi.innerHTML = trineopuan;
            oyuncuoyun.src = "tas.png";
            trineooyun.src = "tas.png";
            $("#tas").attr("onclick", "tas()");
            $("#kagit").attr("onclick", "kagit()");
            $("#makas").attr("onclick", "makas()");
        }
    }
}

function makas() {
    beyinoyun();
    round++;
    sayi.innerHTML = round;
    oyuncuoyun.src = "makas.png";
    if(sonuc == "TAŞ"){
        trineooyun.src = "tas.png";
        oyundurumu.innerHTML = "TRINEO KAZANDI";
        trineopuan++;
        trineosayi.innerHTML = trineopuan;
    }
    else if(sonuc == "KAĞIT"){
        trineooyun.src = "kagit.png";
        oyundurumu.innerHTML = "OYUNCU KAZANDI";
        oyuncupuan++;
        oyuncusayi.innerHTML = oyuncupuan;
    }
    else{
        trineooyun.src = "makas.png";
        oyundurumu.innerHTML = "BERABERE";
    }
    if(oyuncupuan == 3 || trineopuan == 3){
        yenioyun.style.display = "block";
        $("#tas").prop("onclick", null).off("click");
        $("#kagit").prop("onclick", null).off("click");
        $("#makas").prop("onclick", null).off("click");
        yenioyun.addEventListener("click", baslat);
        document.getElementById("demo").style.display = "block"
        function baslat(){
            document.getElementById("demo").style.display = "none";
            yenioyun.style.display = "none";
            document.getElementById("beyin").src = "brain.png";
            oyundurumu.innerHTML = "OYUN BAŞLASIN";
            round = 1;
            oyuncupuan = 0;
            trineopuan = 0;
            sayi.innerHTML = round;
            oyuncusayi.innerHTML = oyuncupuan;
            trineosayi.innerHTML = trineopuan;
            oyuncuoyun.src = "tas.png";
            trineooyun.src = "tas.png";
            $("#tas").attr("onclick", "tas()");
            $("#kagit").attr("onclick", "kagit()");
            $("#makas").attr("onclick", "makas()");
        }
    }
}