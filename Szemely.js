class Szemely {

    #szulNev;
    
    constructor(nev, szul_datum, szuloElem){
        this.nev = nev;
        this.szul_datum = szul_datum;
        this.#szulNev= nev;

        szuloElem.append(`
            <div class="szemely">
                <h3>${this.nev}</h3>
                <p>${this.kor()}</p>
            </div>
        `)

        this.szemelyElem = $(".szemely:last-child");
        console.log(this);
        this.szemelyElem.on("click", () =>{
            console.log(this.nev)
        })

        this.nevElem = $(".szemely:last-child h3");
    }

    getSzulnev(){
        return this.#szulNev;
    }

    kor(){
        const d = new Date();
        let year = d.getFullYear()
        let aktKor = year - this.szul_datum;
        return aktKor;
    }
}

export default Szemely;
