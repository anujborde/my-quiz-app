class Quiz{
    constructor(){
        this.inputbox=createInput("Enter Name")
        this.loginbox=createButton("Login")
    }

hideboxes(){
    this.inputbox.hide();
    this.loginbox.hide();
}

async start(){
    if(gmamestate===0){

    }
}
display(){
    this.inputbox.position(425,100)
}

    getState(){
        database.ref("gamestate").on("value",(data)=>{
            gamestate=data.val();
        })
    }

update(state){
database.ref('/').update({
    gamestate:state
})

}

}