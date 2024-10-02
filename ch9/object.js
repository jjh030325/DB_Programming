let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구",
    present : "현재"
};

const unit = {
    attack (weapon) {
        return `${weapon}으로 공격한다.`;
    }
}

delete dic.girl;
dic.present = "선물";

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);
console.log(dic.present);

console.log(unit.attack("무기"));