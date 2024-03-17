function showTariff(name,...advantages){
    console.log(`Тариф : ${name}`);
    for(let i = 0; i < advantages.length; i++){
        console.log(`- ${advantages[i]}`);
    }
}
showTariff("Базовый тариф","Музыка","Кион");
showTariff("Премиум","Музыка","Кион" ,"Музыка","Кион");
