function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
        if (this.idade==100)
        return;
    },1000)
}

new Pessoa