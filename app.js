var data = [
    {name:"Red" , n:0},
    {name: "Green", n:0},
    {name: "Blue" , n:0},
    ];
var eles = [];


function box(itm){
    const that=this;
    this.number = itm.n;
    that.style(itm.name);
    this.ele.addEventListener("click",function(){
        that.counter();
    })
    document.body.appendChild(this.ele);
}

box.prototype.counter = function(){
    this.number = this.number + 1;
    this.ele.innerHTML=this.number;
}

box.prototype.style = function(name){
    this.ele=document.createElement("div");
    this.ele.style.width = "200px";
    this.ele.style.height = "100px";
    this.ele.style.borderRadius = "10px";
    this.ele.style.backgroundColor = name;
    this.ele.style.fontsize = "18px";
    this.ele.style.color = "white";
    this.ele.style.textAlign = "center";
    this.ele.style.lineHeight = "100px";
    this.ele.innerHTML = this.number;
}

for (i=0; i<data.length; i++){
    eles.push(new box(data[i]));
}
