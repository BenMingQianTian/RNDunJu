const qiYiYang = ['戊', '己', '庚', '辛', '壬', '癸', '丁', '丙', '乙']
const qiYiYin = ['戊', '乙', '丙', '丁', '癸', '壬', '辛', '庚', '己']
const gongLabel = ['巽四', '离九', '坤二', '震三', '中五', '兑七', '艮八', '坎一', '乾六']
const houTiangGongXu = [7, 2, 3, 0, 4, 8, 5, 6, 1]
const juIndexLabel = ['一', '二', '三', '四', '五', '六', '七', '八', '九']

function gongXu(juIndex) {
    const gongXuList = houTiangGongXu.concat(houTiangGongXu)
    return gongXuList.splice(juIndex, 9)
}

export {
    qiYiYang,
    qiYiYin,
    gongLabel,
    houTiangGongXu,
    juIndexLabel,
    gongXu,
}